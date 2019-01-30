//'use strict';

var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, b, c, d) {
    if (b) {
        c = $jscomp.global;
        a = a.split(".");
        for (d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in c || (c[e] = {});
            c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && $jscomp.defineProperty(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
};
$jscomp.polyfill("Array.prototype.fill", function(a) {
        return a ? a : function(a, c, d) {
            var b = this.length || 0;
            0 > c && (c = Math.max(0, b + c));
            if (null == d || d > b) d = b;
            d = Number(d);
            0 > d && (d = Math.max(0, b + d));
            for (c = Number(c || 0); c < d; c++) this[c] = a;
            return this
        }
    },
    "es6", "es3");
$jscomp.findInternal = function(a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a)) return {
            i: e,
            v: f
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.polyfill("Array.prototype.find", function(a) {
        return a ? a : function(a, c) {
            return $jscomp.findInternal(this, a, c).v
        }
    },
    "es6", "es3");

var localData = localData || {},
    epubPath = "",
    blankPage = "./blank.html",
    creator = "HP",
    loadBG = !1,
    loadSvg = !0,
    imgFormat = "png",
    preview = "pd",
    pages = [blankPage, blankPage],
    startpage = 0,
    drawingData = [],
    bookmarkData = [],
    progressData = [],
    linkData = [],
    boardData = [],
    currentPageIdx = -1,
    currentOnePageIdx = 0,
    hl_canvas,
    hl_context,
    zoomSlider,
    alphaSlider,
    width = $(".quickMenu .quickbtn .btnQuickText").css("width"), //2019.01.18 왕예나 추가
    height = $(".quickMenu .quickbtn .btnQuickText").css("height"), 
    viewBox = {
        mode: "both",
        scale: 1,
        zoom: 100,
        w: 0,
        h: 0,
        moving_step: 5
    },
    viewPort = {
        w: 0,
        h: 0,
        vw: 0,
        vh: 0
    },
    svgViewBox = {
        scale: 1,
        w: 595.276,
        h: 779.52802
    },
    bHandleOn = !1,
    execTime = 0,
    requestedPage,
    pageLocationTask,
    drawingAlphaValue,
    preLoadingWorker,
    isLoadedPageFlip = !1,
    isZooming = !1,
    isPopupOpened = !1,
    isDraggingQuick = false,
    isWebview = void 0 !== window.android ? !0 : !1,
    TYPE_MODAL = 1,
    TYPE_SLIDE = 2,
    resultType = TYPE_SLIDE,
    SIDEMENU_TOC = 1,
    SIDEMENU_THUMB = 2,
    SIDEMENU_BOOKMARK = 3,
    SIDEMENU_SEARCH = 4,
    sideMenu = {
        toc: null,
        thumb: null,
        bookmark: null,
        search: null,
        setMenu: function(a, b) {
            switch (b) {
                case SIDEMENU_TOC:
                    this.toc = a;
                    this.toc.name = "CONTENTS";
                    this.toc.type = b;
                    break;
                case SIDEMENU_THUMB:
                    this.thumb = a;
                    this.thumb.name = "PAGE";
                    this.thumb.type = b;
                    this.thumb.isLoaded = !1;
                    break;
                case SIDEMENU_BOOKMARK:
                    this.bookmark = a;
                    this.bookmark.name = "BOOKMARK";
                    this.bookmark.type = b;
                    break;
                case SIDEMENU_SEARCH:
                    this.search = a,
                        this.search.name = "SEARCH",
                        this.search.type = b
            }
        },
        getMenu: function(a) {
            switch (a) {
                case SIDEMENU_TOC:
                    return this.toc;
                case SIDEMENU_THUMB:
                    return this.thumb;
                case SIDEMENU_BOOKMARK:
                    return this.bookmark;
                case SIDEMENU_SEARCH:
                    return this.search
            }
            return null
        },
        open: function(a) {
            this.closeAllButNotThis(a);
            classie.add(this.getMenu(a), "cbp-spmenu-open");
            void 0 !== window.android && window.android.setViewerLeftTopButtonChange(!0, this.getMenu(a).name);
            a !== SIDEMENU_THUMB || this.thumb.isLoaded || loadThumb()
        },
        toggle: function(a) {
            classie.has(this.getMenu(a), "cbp-spmenu-open") ? this.close(a) : this.open(a)
        },
        close: function(a) {
            classie.remove(this.getMenu(a), "cbp-spmenu-open");
            void 0 !== window.android && window.android.setViewerLeftTopButtonChange(!1, this.getMenu(a).name)
        },
        closeAll: function() {
            this.close(SIDEMENU_TOC);
            this.close(SIDEMENU_THUMB);
            this.close(SIDEMENU_BOOKMARK);
            this.close(SIDEMENU_SEARCH);
            hideQuickMenu();
            $("#menu_contents .collapse").collapse("hide")
        },
        closeAllButNotThis: function(a) {
            a !== SIDEMENU_TOC && (this.close(SIDEMENU_TOC), $("#menu_contents .collapse").collapse("hide"));
            a !== SIDEMENU_THUMB && this.close(SIDEMENU_THUMB);
            a !== SIDEMENU_BOOKMARK && this.close(SIDEMENU_BOOKMARK);
            a !== SIDEMENU_SEARCH && this.close(SIDEMENU_SEARCH)
        }
    },
    viewer = {
        link: function(a, b) {
            "document" == a ? null != window.android ? window.android.openFile(b) : location.href = "/download/?url=." + encodeURIComponent(epubDB.getBasePath() + "/" + b) + "&baseurl=" + epubDB.getBaseFolder() : "popup_window" == a ? null == window.android && (0 <= b.indexOf("..") && (b = epubDB.getBasePath() + b.substr(0 > b.lastIndexOf("../") ? 0 : b.lastIndexOf("../")).replace("..", "")), void 0 !== window.android ? window.android.openInternalBrowser(b) : window.open(b, "_blank", "scrollbars=no, toolbar=no, location=no, menubar=no, width=850, height=800")) : "popup" == a ? (isPopupOpened = !0, 0 <= b.indexOf("..") && (b = epubDB.getBasePath() + b.substr(0 > b.lastIndexOf("../") ? 0 : b.lastIndexOf("../")).replace("..", "")), $("#framePopupContents").attr("src", b), $("#cbp-spmenu-s1").hide(), $("#cbp-spmenu-s2").hide(), $("#cbp-spmenu-s3").hide(), $("#cbp-spmenu-s4").hide(), $("#popupContents").show()) : "close" == a && "main" == b ? (isPopupOpened = !1, $("#popupContents").hide(), $("#cbp-spmenu-s1").show(), $("#cbp-spmenu-s2").show(), $("#cbp-spmenu-s3").show(), $("#cbp-spmenu-s4").show(), $("#framePopupContents").attr("src", "/blank.html"), clearDrawingPopup(), showMain()) : (isPopupOpened = !1, $("#popupContents").hide(), $("#cbp-spmenu-s1").show(), $("#cbp-spmenu-s2").show(), $("#cbp-spmenu-s3").show(), $("#cbp-spmenu-s4").show(), clearDrawingPopup(), closeDrawing(), $("#framePopupContents").attr("src", "/blank.html"))
        },
        linkAction: function(a) {
            location.href = "/download/?url=." + encodeURIComponent(epubDB.getBasePath() + "/" + a) + "&baseurl=" + epubDB.getBaseFolder()
        },
        gotoPage: function(a) {
            menuCloseFix();
            $("#main").hide();
            goPageWithIdx(a);
            $("#classProgress").hide()
        },
        gotoPageByMain: function(a) {
            menuCloseFix();
            $("#main").hide();
            goPageWithIdx(a);
            $("#classProgress").hide()
        },
        openProgress: function() {
            $("#popupProgressMain").modal()
        },
        openPDF: function() {
            window.open(epubDB.getBasePath() + "/data/01_unitdata/01_textbook/textbook.pdf", "_blank")
        },
        openDrawer: function() {
            $("#framePopupContents")[0].contentWindow.openDrawer()
        },
        showDrawing: function() {
            openDrawing();
        },
        openPDS: function() {
            window.open(epubDB.getBasePath() + "/contents/common/popup/data/data.html?epubcode=" + epub_code, "")
        },
        openPlayInstrument: function() {
            window.open(epubDB.getBasePath() + "/contents/common/popup/music/music.html", "")
        },
        openVivasam: function() {
            void 0 != window.android ? window.android.openExternalBrowser("http://www.vivasam.com/") : window.open("http://www.vivasam.com/", "_blank")
        }
    };

function setOrientation(orientation) {
    console.log(orientation);
    if (orientation == "portrait") {
        setViewMode(1);
    } else {
        setViewMode(2);
    }
}

function goForward() {
    var a = epubDB.setHistoryForward();
    isNaN(a) || (requestedPage = a, goPage())
}

function goBack() {
    var a = epubDB.setHistoryBack();
    isNaN(a) || (requestedPage = a, goPage())
}

function showMain() {
    isZooming && closeZoom();
    $("#popupProgress").hide();
    sideMenu.closeAll();
    closeDrawing();
    $("#main").show()
}
// isWebview && ($("#top_menu").hide(), $("#bottom_menu").hide(), epub_code = window.android.getEpubCode(), epubPath = window.android.getEpubPath());

if(isWebview){
	epub_code = window.android.getEpubCode();
    epubPath = window.android.getEpubPath();
    // $("#bottom_menu").hide();

	// window.android.log(epub_code);
	// window.android.log(epubPath);
} else {
    epub_code = "5c4034192971b";
    epubPath = "./files/contents/5c4034192971b/ebook/OEBPS";
    viewerPath = "";
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) ? !0 : !1
}

function isIpad() {
    return /iPhone|iPad/i.test(navigator.userAgent) ? !0 : !1
}

function copyToClipboard(a) {
    var b = "INPUT" === a.tagName || "TEXTAREA" === a.tagName;
    if (b) {
        e = a;
        var c = a.selectionStart;
        var d = a.selectionEnd
    } else {
        e = document.getElementById("_hiddenCopyText_");
        if (!e) {
            var e = document.createElement("textarea");
            e.style.position = "absolute";
            e.style.left = "-9999px";
            e.style.top = "0";
            e.id = "_hiddenCopyText_";
            document.body.appendChild(e)
        }
        e.textContent = a.textContent
    }
    var f = document.activeElement;
    e.focus();
    e.setSelectionRange(0, e.value.length);
    try {
        var g = document.execCommand("copy")
    } catch (h) {
        g = !1
    }
    f && "function" === typeof f.focus && f.focus();
    b ? a.setSelectionRange(c, d) : e.textContent = "";
    return g
}

function movePrev(a) {
    a ? 0 <= currentOnePageIdx - 1 && ($("#frame_onepage").attr("src", getPage(currentOnePageIdx - 1)), --currentOnePageIdx, resizeOnePage(), requestedPage = parseInt(currentOnePageIdx), goPage()) : 0 <= currentPageIdx - 2 && (requestedPage = parseInt(currentPageIdx) - 2, goPage())
}

function moveNext(a) {
    a ? currentOnePageIdx + 1 <= pages.length - 1 && (currentOnePageIdx += 1, resizeOnePage(), requestedPage = parseInt(currentOnePageIdx), goPage()) : currentPageIdx + 2 <= pages.length - 1 && (requestedPage = parseInt(currentPageIdx) + 2, goPage())
}

function enableHighlight() {
    $("#canvas_highlight").css("pointer-events", "auto");
    hl_context.globalAlpha = .3;
    hl_context.beginPath();
    hl_context.rect(0, 0, hl_canvas.width, hl_canvas.height);
    hl_context.fillStyle = "#f44283";
    hl_context.fill();
    hl_context.closePath()
}

function disableHighlight() {
    clearHighlight();
    $("#canvas_highlight").css("pointer-events", "none")
}

function locationPage(a) {
    sideMenu.closeAll();
    requestedPage = parseInt(a);
    goPage()
}

function getPage(pageidx) {
     if (pages[pageidx].indexOf("blank") >= 0) {
        return blankPage;
    } else
        return loadSvg ? epubPath + "/" + pages[pageidx].replace(".xhtml", "_s.xhtml") : epubPath + "/" + pages[pageidx];
}

function loadPage() {
    var a = requestedPage % 2 ? requestedPage - 1 : requestedPage;
    $(".page_frame_left").attr("src", getPage(a));
    "HP" == creator ? a < pages.length - 1 ? $(".page_frame_right").attr("src", getPage(a + 1)) : $(".page_frame_right").attr("src", blankPage) : $(".page_frame_right").attr("src", getPage(a + 1))
}

function goPage() {
    void 0 !== window.viewer && "undefined" !== typeof window.viewer.stopWorker && window.viewer.stopWorker();
    var a = requestedPage;
    "oneside" == viewBox.mode && ($("#frame_onepage").attr("src", getPage(requestedPage)), currentOnePageIdx = requestedPage, resizeOnePage());
    a = a % 2 ? a - 1 : a;
    $(".page_loader").show();
    null != pageLocationTask && clearTimeout(pageLocationTask);
    pageLocationTask = setTimeout(loadPage, 300);
    currentPageIdx = a;
    loadPageInfo(currentPageIdx);
    epubDB.addHistory(currentPageIdx);
    loadBookmark();
    loadWebLink();
    if (void 0 !== window.android) window.android.onPageChange(currentPageIdx);
    else if (void 0 != window.viewer && (loadBG && void 0 !== window.viewer && "undefined" !== typeof window.viewer.changeBG && window.viewer.changeBG(a), void 0 !== window.viewer && "undefined" !== typeof window.viewer.onPageMoved)) window.viewer.onPageMoved(currentPageIdx);
    isLoadedPageFlip && ($(".flipbook").show(), $(".flipbook").turn("page", currentPageIdx + 1))
}

function goPageWithUrl(a) {
    sideMenu.closeAll();
    for (var b = 0; b < pages.length; b++) 0 <= pages[b].indexOf(a) && (requestedPage = b, goPage())
}

function getCurPageIdx() {
    return currentPageIdx
}

function linkAction(a) {
    setTimeout(function() {
            window.open(a, "_blank")
        },
        0)
}

function link(a, b) {
    void 0 !== windows.viewer && windows.viewer.link(a, b)
}

function goPageWithIdx(a) {
    requestedPage = parseInt(a);
    goPage();
}

function setOpenThumb() {
    sideMenu.toggle(SIDEMENU_THUMB)
}

function setOpenSearch(a) {
    sideMenu.toggle(SIDEMENU_SEARCH)
}

function numbering(a) {
    return 10 > a ? "00" + a : 100 > a ? "0" + a : a
}

function loadEpub() {
	if (epubDB.base == null) {
        //$.getJSON( epubPath+"/pp_db/base.json", {  } )
        $.getJSON(epubPath + "/pp_db/base.json", {})
            .done(function(data) {
                epubDB.base = data;
                epubDB.epubInfo = data.info;
                epubDB.epubToc = data.toc;
                initEpub();
            })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err);
                $(".cover_loader").hide();
            });
    } else {
        initEpub();
    }

	/*
	epub_code = window.android.getEpubCode();
	epubPath = window.android.getEpubPath();

    null == epubDB.base ? $.getJSON("/index.php/epub/info/" + epub_code + "/" + preview + "/", {}).done(function(a) {
        epubDB.base = a;
        epubDB.epubInfo = a.info;
        epubDB.epubToc = a.toc;
        initEpub()
    }).fail(function(a, b, c) {
        console.log("Request Failed: " + (b + ", " + c));
        $(".cover_loader").hide()
    }) : initEpub()
	*/
}


function initEpub() {
    epubDB.epubInfo.startpage = 0;
    /*
    epubDB.epubInfo.menu_toc="Y";
    epubDB.epubInfo.menu_thumb="Y";
    epubDB.epubInfo.menu_single="Y";
    epubDB.epubInfo.menu_double="Y";
    epubDB.epubInfo.menu_highlight="Y";
    epubDB.epubInfo.menu_draw="Y";
    epubDB.epubInfo.menu_bookmark="Y";
    epubDB.epubInfo.menu_help="Y";
    epubDB.epubInfo.menu_search="Y";

    if(epubDB.epubInfo.menu_toc=="Y") $(".topBtnList").css("display", "inline-block");
    if(epubDB.epubInfo.menu_thumb=="Y") $(".topBtnThumbnail").css("display", "inline-block");
    if(epubDB.epubInfo.menu_single=="Y") $(".topBtnOne").css("display", "inline-block");
    if(epubDB.epubInfo.menu_double=="Y") $(".topBtnTwo").css("display", "inline-block");
    if(epubDB.epubInfo.menu_highlight=="Y") $(".topBtnHighlight").css("display", "inline-block");
    if(epubDB.epubInfo.menu_draw=="Y") $(".drawing").css("display", "inline-block");
    if(epubDB.epubInfo.menu_bookmark=="Y") $(".topBtnBookmark").css("display", "inline-block");
    if(epubDB.epubInfo.menu_help=="Y") $(".help").css("display", "inline-block");
    //if(epubDB.epubInfo.menu_search=="Y") $("#bottom_menu .search").css("visibility", "visible"); //$(".search").show();
    //else $("#bottom_menu .search").css("visibility", "hidden"); //$(".search").hide();
    */

    //console.log("Epub Info #########################");
    //console.log(epubDB.epubInfo);
    //console.log("Epub Toc #########################");
    //console.log(epubDB.epubToc);

    pages = [];
    for (var i = 0; i < epubDB.base.pages.length; i++) {
        pages.push(epubDB.base.pages[i].url);
    }
    //console.log("Epub Pages #########################");
    //console.log(pages);

    /// 목차
    var parentIdx = -1;
    for (var i = 0; i < epubDB.epubToc.length; i++) {

        if (epubDB.epubToc[i].depth == "1" && epubDB.epubToc[i + 1] !== undefined && epubDB.epubToc[i + 1].depth == "2")
            parentIdx = epubDB.epubToc[i].page_idx;

        if (preview != "pd" && epubDB.epubInfo.limitpage > 0) { // 미리보기인 경우
            for (var k = 0; k < epubDB.base.pages.length; k++) {
                if (epubDB.base.pages[k].url.indexOf(epubDB.epubToc[i].url) >= 0) {
                    addToc(epubDB.epubToc[i].url, epubDB.epubToc[i].title, epubDB.epubToc[i].page_idx, epubDB.epubToc[i].depth,
                        (epubDB.epubToc[i + 1] !== undefined && epubDB.epubToc[i + 1].depth == "2") ? true : false, parentIdx);
                    break;
                }
            }
        } else {
            addToc(epubDB.epubToc[i].url, epubDB.epubToc[i].title, epubDB.epubToc[i].page_idx, epubDB.epubToc[i].depth,
                (epubDB.epubToc[i + 1] !== undefined && epubDB.epubToc[i + 1].depth == "2") ? true : false, parentIdx);
        }
    }

    initPageSlider();
    //loadPageFlipAni();
    loadPageInfo(0);
    loadBookmark();
    loadProgress();
    resizeViewer();

    $(".page_amount").text("/ " + (epubDB.totalCnt() - 1));
    $(".cover_loader").hide();
}


/*
function initEpub() {
    epubDB.epubInfo.startpage = 0;
    pages = [];
    for (var a = 0; a < epubDB.base.pages.length; a++) "HP" == creator ? 0 <= epubDB.base.pages[a].url.indexOf("blank") ? pages.push(epubDB.base.pages[a].url) : pages.push("/files/contents/" + epubDB.epubInfo.base_url + "/ebook/OEBPS/" + epubDB.base.pages[a].url) : pages.push("/files/contents/" + epubDB.epubInfo.base_url + "/ebook/OEBPS/" + epubDB.base.pages[a].url);
    var b = -1;
    for (a = 0; a < epubDB.epubToc.length; a++)
        if ("1" == epubDB.epubToc[a].depth && void 0 !== epubDB.epubToc[a + 1] && "2" == epubDB.epubToc[a + 1].depth && (b = epubDB.epubToc[a].idx), "pd" != preview && 0 < epubDB.epubInfo.limitpage)
            for (var c = 0; c < epubDB.base.pages.length; c++) {
                if (0 <= epubDB.base.pages[c].url.indexOf(epubDB.epubToc[a].url)) {
                    addToc(epubDB.epubToc[a].url, epubDB.epubToc[a].title, epubDB.epubToc[a].idx, epubDB.epubToc[a].depth, void 0 !== epubDB.epubToc[a + 1] && "2" == epubDB.epubToc[a + 1].depth ? !0 : !1, b);
                    break
                }
            } else addToc(epubDB.epubToc[a].url, epubDB.epubToc[a].title, epubDB.epubToc[a].idx, epubDB.epubToc[a].depth, void 0 !== epubDB.epubToc[a + 1] && "2" == epubDB.epubToc[a + 1].depth ? !0 : !1, b);
    initPageSlider();
    loadPageInfo(0);
    loadBookmark();
    loadProgress();
    resizeViewer();
    $(".cover_loader").hide();
    setTimeout(function() {
            void 0 !== window.viewer && "undefined" !== typeof window.viewer.onPageMoved && window.viewer.startCache()
        },
        2E3)
}
*/
function loadPageFlipAni() {
    for (var a, b = 0; b < Number(epubDB.epubInfo.totalpage); b++) a = $("<div style='background-image:url(" + epubPath + "/pp_print/" + pageFormat(b + 1) + "." + imgFormat + ")'></div>"),
        $(".flipbook").append(a);
    $(".flipbook").turn({
        acceleration: !0,
        elevation: 50,
        gradients: !0,
        display: "double",
        page: 1,
        autoCenter: !1,
        duration: 700,
        when: {
            turned: function(a, b, e) {
                $(".flipbook").fadeOut(0);
                isLoadedPageFlip = !0
            },
            end: function(a, b, e) {
                $(".flipbook").fadeOut(500);
                isLoadedPageFlip = !0
            }
        }
    });
    setTimeout(function() {
            $(".cover_loader").hide()
        },
        2E3)
}

function clearHighlight() {
    null != hl_context && hl_context.clearRect(0, 0, hl_canvas.width, hl_canvas.height)
}

function clearDrawingPopup() {}

function loadDrawData() {
    drawingCanvas.clear();
    null != localStorage.getItem("drawing_" + epub_code) && (drawingData = JSON.parse(localStorage.getItem("drawing_" + epub_code)), null != localStorage.getItem("drawing_" + epub_code) && drawingCanvas.loadFromJSON(drawingData[currentPageIdx], function() {
        drawingCanvas.renderAll();
        disableSelectObject()
    }))
}

// 2019.01.17 왕예나 수정
var pagedata = null;

function loadPageInfo(a) {
    clearHighlight();

    loadDrawData();

    if (pagedata == null) {
        $.getJSON(epubPath + "/pp_db/page.json", {})
            .done(function(data) {
                pagedata = data;
                epubDB.page = data;
                pageLoad();
            });
    } else
        pageLoad();
        
}

// 검색 후 페이지를 로드하기 위한 추가
function pageLoad() {
    if (pagedata.length == 1) {
        pageInfo = [];
        pageInfo.push({ contents: "", matrix: [], thumbnail: "", url: "" });
        pageInfo.push(pagedata[0]);
    } else {
        pageInfo = [];
        pageInfo.push(pagedata[parseInt(currentPageIdx) - 1]);
        pageInfo.push(pagedata[parseInt(currentPageIdx)]);
    }

    epubDB.pageInfo = pageInfo;

    if (pageInfo[0] !== undefined) {
        if (pageInfo[0].svg_w > 0) {
            svgViewBox.w = pageInfo[0].svg_w;
            svgViewBox.h = pageInfo[0].svg_h;
        } else {
            svgViewBox.w = pageInfo[1].svg_w;
            svgViewBox.h = pageInfo[1].svg_h;
        }

        //console.log("SVG W : " + svgViewBox.w + ", SVG H : " + svgViewBox.h);
        //console.log("thumbnail : " + pageInfo[currentPageIdx].url.replace("p", "/pp_thumbnail/").replace(".xhtml", ".jpg"));

        $("#naviBackImageLeft").attr("src", (pageInfo[0] == undefined || pageInfo[0].url == "") ? "./resources/img/common/empty.jpg" : epubPath + pageInfo[0].url.replace("p", "/pp_thumbnail/").replace(".xhtml", ".jpg"));
        $("#naviBackImageRight").attr("src", epubPath + pageInfo[1].url.replace("p", "/pp_thumbnail/").replace(".xhtml", ".jpg"));

        $("#page_selector_left").attr("src", (pageInfo[0] == undefined || pageInfo[0].url == "") ? "./resources/img/common/empty.jpg" : epubPath + pageInfo[0].url.replace("p", "/pp_thumbnail/").replace(".xhtml", ".jpg"));
        $("#page_selector_right").attr("src", epubPath + pageInfo[1].url.replace("p", "/pp_thumbnail/").replace(".xhtml", ".jpg"));
    }

    resizeViewer();
}

function initPageInfo(a) {
    "HP" == creator ? 1 == epubDB.page.length || 0 == a ? (epubDB.pageInfo = [], epubDB.pageInfo.push({
        contents: "",
        matrix: [],
        thumbnail: "",
        url: ""
    }), epubDB.pageInfo.push(epubDB.page[0])) : (epubDB.pageInfo = [], epubDB.pageInfo.push(epubDB.page[0]), epubDB.pageInfo.push(epubDB.page[1])) : (epubDB.pageInfo = [], epubDB.pageInfo.push(epubDB.page[0]), epubDB.pageInfo.push(epubDB.page[1]));
    0 < epubDB.pageInfo[0].svg_w ? (svgViewBox.w = epubDB.pageInfo[0].svg_w, svgViewBox.h = epubDB.pageInfo[0].svg_h) : (svgViewBox.w = epubDB.pageInfo[1].svg_w, svgViewBox.h = epubDB.pageInfo[1].svg_h);
    loadBG || ("HP" == creator ? ($("#naviBackImageLeft").attr("src", 0 == a && "" == epubDB.pageInfo[0].thumbnail ? "/resources/img/common/empty.jpg" : epubDB.pageInfo[0].thumbnail), $("#naviBackImageRight").attr("src", void 0 == epubDB.pageInfo[1] ? "/resources/img/common/empty.jpg" : epubDB.pageInfo[1].thumbnail), $("#page_selector_left").attr("src", 0 == a && "" == epubDB.pageInfo[0].thumbnail ? "/resources/img/common/empty.jpg" : epubDB.pageInfo[0].thumbnail)) : ($("#naviBackImageLeft").attr("src", epubPath + epubDB.pageInfo[0].thumbnail), $("#naviBackImageRight").attr("src", void 0 == epubDB.pageInfo[1] ? "/resources/img/common/empty.jpg" : epubDB.pageInfo[1].thumbnail), $("#page_selector_left").attr("src", epubPath + epubDB.pageInfo[0].thumbnail)), $("#page_selector_right").attr("src", void 0 == epubDB.pageInfo[1] ? "/resources/img/common/empty.jpg" : epubDB.pageInfo[1].thumbnail));
    resizeViewer()
}

function loadProgress() {
    progressData = null != localStorage.getItem("progress_" + epub_code) ? JSON.parse(localStorage.getItem("progress_" + epub_code)) : [];
    progressData.sort(function(a, c) {
        return parseFloat(a.level) < parseFloat(c.level) ? -1 : parseFloat(a.level) > parseFloat(c.level) ? 1 : parseFloat(a.class) < parseFloat(c.class) ? -1 : parseFloat(a.class) == parseFloat(c.class) ? 0 : 1
    });
    $("#progressListMain").empty();
    $("#progressList").empty();
    for (var a = 0; a < progressData.length; a++) null != progressData[a] && ($("#progressList").append('<li>\t<label class="chk">\t\t<input id="chk_progress" type="checkbox" value="' + progressData[a].idx + "|" + progressData[a].level + '" name="progressComplete"/><span class="ico"></span>\t</label>\t<p class="progressCompleteTxt" onClick="gotoByProgress(\'' + progressData[a].idx + "', true)\">" + progressData[a].level + '\t<span class="pageNum">p.' + progressData[a].idx + '</span><span class="date">' + (void 0 === progressData[a].regdate ? "" : progressData[a].regdate) + '</span></p>\t<div id="" style="margin-left:45px;" class="progressStu" onClick="gotoByProgress(\'' + progressData[a].idx + "', true)\">\uc218\uc5c5\ud558\uae30</div></li>"))
    //for (var a = 0; a < progressData.length; a++) null != progressData[a] && ($("#progressList").append('<li>\t<label class="chk">\t\t<input id="chk_progress" type="checkbox" value="' + progressData[a].idx + "|" + progressData[a].level + "|" + progressData[a].class + '" name="progressComplete"/><span class="ico"></span>\t</label>\t<p class="progressCompleteTxt" onClick="gotoByProgress(\'' + progressData[a].idx + "', true)\">" + progressData[a].level + "\ud559\ub144 " + progressData[a].class + '\ubc18\t<span class="pageNum">p.' + progressData[a].idx + '</span><span class="date">' + (void 0 === progressData[a].regdate ? "" : progressData[a].regdate) + '</span></p>\t<div id="" class="progressSav" onClick="updateProgress(\'' + progressData[a].idx + "', '" + progressData[a].level + "', '" + progressData[a].class + '\')">\uc800\uc7a5\ud558\uae30</div>\t<div id="" class="progressStu" onClick="gotoByProgress(\'' + progressData[a].idx + "')\">\uc218\uc5c5\ud558\uae30</div></li>"), $("#progressListMain").append('<li>\t<label class="chk" style="width:30px;">\t</label>\t<p class="progressCompleteTxt" onClick="gotoByProgress(\'' + progressData[a].idx + "', true)\">" + progressData[a].level + "\ud559\ub144 " + progressData[a].class + '\ubc18\t<span class="pageNum">p.' + progressData[a].idx + '</span><span class="date">' + (void 0 === progressData[a].regdate ? "" : progressData[a].regdate) + '</span></p>\t<div id="" style="margin-left:45px;" class="progressStu" onClick="gotoByProgress(\'' + progressData[a].idx + "', true)\">\uc218\uc5c5\ud558\uae30</div></li>"))
}

function gotoByProgress(a) {
    $("#popupProgressList").modal("hide");
    $("#popupProgressMain").modal("hide");
    viewer.gotoPage(a)
}

function updateProgress(a, b, c) {
    null != localStorage.getItem("progress_" + epub_code) && (progressData = JSON.parse(localStorage.getItem("progress_" + epub_code)));
    a = new Date;
    a = dateFormat(a.getMonth() + 1) + "/" + dateFormat(a.getDate());
    for (var d = (new Date).getTime(), e = 0; e < progressData.length; e++)
        if (progressData[e].level == b && progressData[e].class == c) {
            progressData[e].idx = currentPageIdx;
            progressData[e].regdate = a;
            progressData[e].timestamp = d;
            break
        }
    localStorage.setItem("progress_" + epub_code, JSON.stringify(progressData));
    $("#popupProgressList").modal("hide");
    loadProgress();
    showSnackBar("snackbar_saved")
}

// 2019.01.16 왕예나 추가
function addProgress(a, b) {
    null != localStorage.getItem("progress_" + epub_code) && (progressData = JSON.parse(localStorage.getItem("progress_" + epub_code)));
    var c = new Date;
    c = dateFormat(c.getMonth() + 1) + "/" + dateFormat(c.getDate());
    var d = (new Date).getTime();

    if (b === 1) {
        progressData.push({
            idx: currentPageIdx,
            level: a,
            regdate: c,
            timestamp: d
        });
    } else {
        progressData.push({
            idx: currentPageIdx,
            level: currentPageIdx,
            regdate: c,
            timestamp: d
        });
    }
    
    localStorage.setItem("progress_" + epub_code, JSON.stringify(progressData));
    $("#popupProgress").hide();
    loadProgress();
    showSnackBar("snackbar_saved");
}

// function addProgress(a, b) {
//     null != localStorage.getItem("progress_" + epub_code) && (progressData = JSON.parse(localStorage.getItem("progress_" + epub_code)));
//     var c = new Date;
//     c = dateFormat(c.getMonth() + 1) + "/" + dateFormat(c.getDate());
//     var d = (new Date).getTime();
//     progressData.push({
//         idx: currentPageIdx,
//         level: a,
//         class: b,
//         regdate: c,
//         timestamp: d
//     });
//     localStorage.setItem("progress_" + epub_code, JSON.stringify(progressData));
//     $("#popupProgress").hide();
//     loadProgress();
//     showSnackBar("snackbar_saved")
// }

// 2019.01.17 왕예나 추가
function removeProgress(val) {

    var sdata = val.split("|");

    var idx = -1;
    for (var i = 0; i < progressData.length; i++) {
        if (progressData[i] == null) continue;
        if (progressData[i].idx == parseInt(sdata[0]) && progressData[i].level === sdata[1]) {
            idx = i;
            break;
        }
        // if (progressData[i].idx == parseInt(sdata[0]) && progressData[i].level == parseInt(sdata[1]) && progressData[i].class == parseInt(sdata[2])) {
        //     idx = i;
        //     break;
        // }
    }

    if (idx >= 0) {
        progressData.splice(idx, 1);
        localStorage.setItem("progress_" + epub_code, JSON.stringify(progressData));
        loadProgress();
    }
}

// function removeProgress(a) {
//     a = a.split("|");
//     for (var b = -1, c = 0; c < progressData.length; c++)
//         if (null != progressData[c] && progressData[c].idx == parseInt(a[0]) && progressData[c].level == parseInt(a[1]) && progressData[c].class == parseInt(a[2])) {
//             b = c;
//             break
//         }
//     0 <= b && (progressData.splice(b, 1), localStorage.setItem("progress_" + epub_code, JSON.stringify(progressData)), loadProgress())
// }

function UnixTimestamp(a) {
    var b = new Date(a);
    a = b.getFullYear() + "";
    var c = 10 > b.getMonth() + 1 ? "0" + (b.getMonth() + 1) : b.getMonth() + 1;
    b = 10 > b.getDate() ? "0" + b.getDate() : b.getDate();
    return a.substr(-2) + "." + c + "." + b
}

function loadWebLink() {
    WebLink.load();
    $("#webLinkList").empty();
    $(".linkicon").remove();
    for (var a = 0, b = 0; b < WebLink.getLink().length; b++)
        if ($("#webLinkList").append('<li>\t<label class="chk">\t\t<input id="chk_weblink" type="checkbox" value="' + WebLink.getLink()[b].idx + '" name="writeCheck"/><span class="ico"></span>\t<p><a href="' + WebLink.getLink()[b].url + '" target="_blank">' + limitWords(WebLink.getLink()[b].name, 12) + '</a>\t<span class="writeDate">' + UnixTimestamp(parseInt(WebLink.getLink()[b].idx)) + "</span>\t</p>\t</label></li>"), WebLink.getLink()[b].pidx == currentPageIdx) {
            var c = WebLink.getLink()[b].idx,
                d = 10 + 70 * Math.floor(a / 10),
                e = 60 + 70 * Math.floor(a);
            $("#cover_view_control").append("<div id='icon" + c + "' class='linkicon' style='position:absolute;top:" + d + "px;left:" + e + "px;z-index:10011;'><a href='" + WebLink.getLink()[b].url + "' target='_blank'><div class='icon_link'></div></a></div>");
            $("#icon" + c).draggable({
                cancel: ".clickable",
                revert: !1,
                iframeFix: !0
            });
            a++
        }
}

function loadBookmark() {
    bookmarkData = null != localStorage.getItem("bookmark_" + epub_code) ? JSON.parse(localStorage.getItem("bookmark_" + epub_code)) : [];
    bookmarkData.sort(function(a, c) {
        return parseFloat(a.pageidx) - parseFloat(c.pageidx)
    });
    $("#bookmarkList").empty();
    $("#bookmark_left").removeClass("on");
    $("#bookmark_right").removeClass("on");
    for (var a = 0; a < bookmarkData.length; a++) null != bookmarkData[a] && (currentPageIdx == parseInt(bookmarkData[a].pageidx) && ($("#bookmark_left").hasClass("on") || $("#bookmark_left").addClass("on")), currentPageIdx + 1 == parseInt(bookmarkData[a].pageidx) && ($("#bookmark_right").hasClass("on") || $("#bookmark_right").addClass("on")), $("#bookmarkList").append('<li>\t<label class="chk">\t\t<input id="chk_bookmark" type="checkbox" value="' + bookmarkData[a].pageidx + '" name="writeCheck"/><span class="ico"></span>\t</label>\t<p id="" class="bookmarksTxt">' + bookmarkData[a].title + '</p>\t<div class="bookmarksImg" onClick="goPageWithIdx(\'' + bookmarkData[a].pageidx + '\')"" style="background:#000;">\t\t<img src="' + epubDB.getThumbnail(epubPath, bookmarkData[a].pageidx).img + '">\t</div></li>'))
}

function addBookmark(a) {
    a = currentPageIdx + parseInt(a);
    for (var b = !1, c = -1, d = 0; d < bookmarkData.length; d++)
        if (null != bookmarkData[d] && bookmarkData[d].pageidx == a) {
            b = !0;
            c = d;
            break
        }
    b ? bookmarkData.splice(c, 1) : bookmarkData.push({
        pageidx: a,
        title: a - parseInt(epubDB.epubInfo.startpage) + "\ucabd"
    });
    localStorage.setItem("bookmark_" + epub_code, JSON.stringify(bookmarkData));
    loadBookmark()
}

function removeBookmark(a) {
    for (var b = -1, c = 0; c < bookmarkData.length; c++)
        if (null != bookmarkData[c] && bookmarkData[c].pageidx == parseInt(a)) {
            b = c;
            break
        }
    0 <= b && (bookmarkData.splice(b, 1), localStorage.setItem("bookmark_" + epub_code, JSON.stringify(bookmarkData)), loadBookmark())
}

function goSearchPage(a) {
    setViewMode(2);
    requestedPage = parseInt(a) + parseInt(epubDB.epubInfo.startpage);
    goPage();
    setTimeout(function() {
            drawHighlight()
        },
        1800)
}

function searchKeyword(_keyword) {

    $(".cover_loader").show();

    keyword = _keyword;

    result_data = [];
    var contents;
    for (var i = 0; i < epubDB.page.length; i++) {
        if (epubDB.page[i].contents.indexOf(keyword) >= 0) {
            contents = (epubDB.page[i].contents.length > 100) ? epubDB.page[i].contents.substr(0, 100) + "..." : epubDB.page[i].contents;
            result_data.push({ "page_idx": i + 1, "thumbnail": epubPath + "/" + epubDB.page[i].thumbnail, "contents": contents.trim(), "url": epubDB.page[i].url, "go_page_idx": i + 1 });
        }
    }

    $(".searchResult").show();
    $("#searched_keyword").text(keyword);
    $("#searched_total").text(result_data.length);

    $("#contents_search").empty();
    if (resultType === TYPE_SLIDE) {
        for (var i = 0; i < result_data.length; i++) {
            $("#contents_search").append('' +
                '<li onclick="goSearchPage(\'' + result_data[i].go_page_idx + '\')">' +
                '	<div class="searchImg" style="background:#000;">' +
                '		<img src="' + epubDB.getThumbnail(epubPath, result_data[i].page_idx).img + '">' +
                '		<span>' + result_data[i].page_idx + '</span>' +
                '	</div>' +
                '	<p>' + result_data[i].contents.replace(keyword, "<span>" + keyword + "</span>") + '</p>' +
                '</li>');
        }

        $(".cover_loader").hide();
        sideMenu.open(SIDEMENU_SEARCH);
    } else {
        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",
            inserting: false,
            editing: false,
            sorting: false,
            paging: true,
            data: result_data,
            rowClick: function() {
                //alert("row clicked");
            },
            fields: [
                { name: "page_idx", type: "number", title: "Page", width: 100, validate: "required", sorting: false, align: "center" },
                {
                    name: "thumbnail",
                    itemTemplate: function(val, item) {
                        return $("<img>").attr("src", val).css({ height: 110, width: 80 }).on("click", function() {

                        });
                    },
                    insertTemplate: function() {
                        var insertControl = this.insertControl = $("<input>").prop("type", "file");
                        return insertControl;
                    },
                    insertValue: function() {
                        return this.insertControl[0].files[0];
                    },
                    title: "Thumbnail",
                    align: "center",
                    width: 100,
                    sorting: false
                },
                { name: "contents", type: "text", title: "Contents", width: 274, sorting: false },
                {
                    name: "go_page_idx",
                    title: "Go",
                    width: 90,
                    align: "center",
                    itemTemplate: function(value, item) {
                        return $("<button type='button' class='btn btn-primary'>").text("Go")
                            .on("click", function() {
                                //console.log(value);
                                $('#modalSearchResults').modal('hide');

                                setViewMode(2);

                                //goPage(parseInt(value)-1);
                                //rangeSlider.noUiSlider.set(parseInt(value) + parseInt(epubDB.epubInfo.startpage));
                                requestedPage = parseInt(value) + parseInt(epubDB.epubInfo.startpage);
                                goPage();

                                setTimeout(function() {
                                    drawHighlight();
                                }, 1800);

                                return false;
                            });
                    }
                },
            ]
        });

        $(".cover_loader").hide();
        $("#modalSearchResults").modal();
    }

    // $(".cover_loader").show();
    // keyword = a;
    // $.getJSON("/index.php/epub/search/" + epub_code + "/" + encodeURI(keyword) + "/", {}).done(function(a) {
    //     $(".searchResult").show();
    //     $("#searched_keyword").text(keyword);
    //     $("#searched_total").text(a.length);
    //     $("#contents_search").empty();
    //     if (resultType === TYPE_SLIDE) {
    //         for (var b = 0; b < a.length; b++) $("#contents_search").append("<li onclick=\"goSearchPage('" + a[b].go_page_idx + '\')">\t<div class="searchImg" style="background:#000;">\t\t<img src="' + epubDB.getThumbnail(epubPath, a[b].page_idx).img + '">\t\t<span>' + a[b].page_idx + "</span>\t</div>\t<p>" + a[b].contents.replace(keyword, "<span>" + keyword + "</span>") + "</p></li>");
    //         $(".cover_loader").hide();
    //         sideMenu.open(SIDEMENU_SEARCH)
    //     } else $("#jsGrid").jsGrid({
    //             width: "100%",
    //             height: "400px",
    //             inserting: !1,
    //             editing: !1,
    //             sorting: !1,
    //             paging: !0,
    //             data: a,
    //             rowClick: function() {},
    //             fields: [{
    //                     name: "page_idx",
    //                     type: "number",
    //                     title: "Page",
    //                     width: 100,
    //                     validate: "required",
    //                     sorting: !1,
    //                     align: "center"
    //                 },
    //                 {
    //                     name: "thumbnail",
    //                     itemTemplate: function(a, b) {
    //                         return $("<img>").attr("src", a).css({
    //                             height: 110,
    //                             width: 80
    //                         }).on("click", function() {})
    //                     },
    //                     insertTemplate: function() {
    //                         return this.insertControl = $("<input>").prop("type", "file")
    //                     },
    //                     insertValue: function() {
    //                         return this.insertControl[0].files[0]
    //                     },
    //                     title: "Thumbnail",
    //                     align: "center",
    //                     width: 100,
    //                     sorting: !1
    //                 },
    //                 {
    //                     name: "contents",
    //                     type: "text",
    //                     title: "Contents",
    //                     width: 274,
    //                     sorting: !1
    //                 },
    //                 {
    //                     name: "go_page_idx",
    //                     title: "Go",
    //                     width: 90,
    //                     align: "center",
    //                     itemTemplate: function(a, b) {
    //                         return $("<button type='button' class='btn btn-primary'>").text("Go").on("click", function() {
    //                             $("#modalSearchResults").modal("hide");
    //                             setViewMode(2);
    //                             requestedPage = parseInt(a) + parseInt(epubDB.epubInfo.startpage);
    //                             goPage();
    //                             setTimeout(function() {
    //                                     drawHighlight()
    //                                 },
    //                                 1800);
    //                             return !1
    //                         })
    //                     }
    //                 }
    //             ]
    //         }),
    //         $(".cover_loader").hide(),
    //         $("#modalSearchResults").modal()
    // }).fail(function(a, c, d) {
    //     console.log("Request Failed: " + (c + ", " + d))
    // })
}

function resizeBookcover() {
    $(window).width();
    var a = $(window).height(),
        b = $(window).width() / 2,
        c = b / (parseFloat(epubDB.epubInfo.width) + 58),
        d = a / (parseFloat(epubDB.epubInfo.height) + 58);
    c = Math.min(c, d);
    var e = epubDB.epubInfo.width * c;
    d = epubDB.epubInfo.height * c;
    $("#bookcover").width(2 * e + 70 * c);
    $("#bookcover").height(d + 20 * c);
    e = 0;
    d < a && (e = (a - d) / 2);
    a = b - epubDB.epubInfo.width * c;
    $("#bookcover").offset({
        left: a - 70 * c / 2,
        top: e - 20 * c / 2 - 2
    })
}

function resizeViewer() {
    resizeBookcover();
    var a = $(window).width(),
        b = $(window).height(),
        c = $(window).width() / 2,
        d = c / (parseFloat(epubDB.epubInfo.width) + 58),
        e = b / (parseFloat(epubDB.epubInfo.height) + 58);
    viewPort.w = a;
    viewPort.h = b;
    viewBox.scale = Math.min(d, e);
    isZooming ? (viewBox.scale *= parseInt(viewBox.zoom) / 100, $("#btn_move_left").show(), $("#btn_move_right").show(), $("#btn_move_up").show(), $("#btn_move_down").show()) : ($("#btn_move_left").hide(), $("#btn_move_right").hide(), $("#btn_move_up").hide(), $("#btn_move_down").hide());
    d = epubDB.epubInfo.width * viewBox.scale;
    e = epubDB.epubInfo.height * viewBox.scale;
    viewBox.w = d;
    viewBox.h = e;
    svgViewBox.scale = d / svgViewBox.w;
    pageWidth = d;
    isZooming ? (a < 2 * d ? ($("#btn_move_left").show(), $("#btn_move_right").show()) : ($("#btn_move_left").hide(), $("#btn_move_right").hide()), b < e ? ($("#btn_move_up").show(), $("#btn_move_down").show()) : ($("#btn_move_up").hide(), $("#btn_move_down").hide()), $("#naviViewport").show()) : ($("#btn_move_left").hide(), $("#btn_move_right").hide(), $("#btn_move_up").hide(), $("#btn_move_down").hide(), $("#naviViewport").hide(), $("#btn_zoom").removeClass("btnZoomOut").addClass("btnZoomIn"));
    $("#cover_view_control").width(2 * d);
    $("#cover_view_control").height(e);
    isLoadedPageFlip && $(".flipbook").turn("size", 2 * d, e);
    $(".cbp-spmenu-bottom.cbp-spmenu-open").css("bottom", $("#bottom_menu").height() + "px");
    $("#cover_leftpage").width(d).height(e);
    $("#cover_rightpage").width(d).height(e);
    $(".page_frame_left").width(epubDB.epubInfo.width);
    $(".page_frame_right").width(epubDB.epubInfo.width);
    $(".page_frame_left").height(epubDB.epubInfo.height);
    $(".page_frame_right").height(epubDB.epubInfo.height);
    $(".btn_page_move").show();
    $(".btn_page_move").css("top", b / 2 - $(".btn_page_move").height() / 2);
    d = 0;
    e < b && (d = (b - e) / 2);
    c -= epubDB.epubInfo.width * viewBox.scale;
    $("#cover_view_control").offset({
        left: c,
        top: d - 3
    });
    e = eval(2 * epubDB.epubInfo.width * viewBox.scale);
    var f = eval(epubDB.epubInfo.height * viewBox.scale);
    viewPort.vw = e;
    viewPort.vh = f;
    a = parseFloat($("#naviHandleArea").width()) * (100 == viewBox.zoom || e < a ? 1 : a / e);
    b = parseFloat($("#naviHandleArea").height()) * (100 == viewBox.zoom || f < b ? 1 : b / f);
    $("#naviHandle").width(a);
    $("#naviHandle").height(b);
    $("#cover_bookmark").width(e);
    $("#cover_bookmark").height(f);
    $("#cover_bookmark").css({
        top: d,
        left: c
    });
    $(".btnBoomMark").css("background-size", 42 * viewBox.scale + "px " + 64 * viewBox.scale + "px");
    $("#canvas_highlight").width(e);
    $("#canvas_highlight").height(f);
    $("#canvas_highlight").css({
        top: d,
        left: c
    });
    $("#touchscroll").width(e);
    $("#touchscroll").height(f);
    $("#touchscroll").css({
        top: d,
        left: c
    });
    $(".page_loader").width(e).height(f).css({
        top: d - 3,
        left: c
    });
    hl_canvas.width = e;
    hl_canvas.height = f;
    pageZoom(viewBox.scale);
    null != drawingCanvas && ($("#cover_drawing").css("top", d), $("#cover_drawing").css("left", c), $("#cover_drawing").width(e), $("#cover_drawing").height(f), $("#drawingCanvas").width(e), $("#drawingCanvas").height(f), drawingCanvas.setWidth(e), drawingCanvas.setHeight(f), drawingCanvas.setZoom(viewBox.scale), drawingCanvas.renderAll());
    $("#tool_drawing").css("top", 350);
    $("#tool_drawing").css("left", 200);
    moveNaviHandle();
    0 > parseInt($("#bottom_menu").css("bottom").replace("px", "")) && $("#bottom_menu").css("bottom", "-" + $(".navBottom").height() + "px");
    "oneside" == viewBox.mode ? (resizeOnePage(), $(".btnOne").hide(), $(".btnTwo").show(), $("#btn_zoom").hide(), $("#cover_bookmark").hide()) : ($(".btnOne").show(), $(".btnTwo").hide(), $("#btn_zoom").show(), $("#cover_bookmark").show())

    // if ("oneside" == viewBox.mode) {
    //     resizeOnePage();
    //     $(".btnOne").hide();
    //     $(".btnTwo").show();
    //     $("#btn_zoom").hide();
    //     // $("#cover_bookmark").hide();
    //     //$("#cover_view_control").hide();
    //     $("#cover_leftpage").hide();
    //     $("#cover_rightpage").hide();
    // } else {
    //     $(".btnOne").show();
    //     $(".btnTwo").hide();
    //     $("#btn_zoom").show();
    //     $("#cover_leftpage").show();
    //     $("#cover_rightpage").show();
    //     // $("#cover_bookmark").show();
    //     //$("#cover_view_control").show();
    // }

    // 2019.01.18 왕예나 추가
    if (isWebview) {
        if (viewBox.mode !== "oneside") {
            $(".quickMenu .quickbtn .btnQuickText").css({
                width: width,
                height: height
            });
            $(".btnQuickText").parent().css("display", "inline-block");
            // $(".btnQuickText").parent().css({
            //     width: 
            //     height: 0
            // });
        }
        
        //퀵메뉴, 확대창 돌려놓기
        $(".quickMenu").css({
            left: "",
            top: ""
        });
        hideQuickMenu();
        $("#naviViewport").css({
            left: "",
            top: ""
        });
    }

}

function moveNaviHandle() {
    if (100 == viewBox.zoom) $("#naviHandle").css("top", 0),
        $("#naviHandle").css("left", 0);
    else {
        var a = $("#cover_view_control").offset().top,
            b = $("#cover_view_control").offset().left;
        b = viewPort.vw < viewPort.w ? 0 : -b * (parseFloat($("#naviHandleArea").width()) / viewPort.vw);
        a = viewPort.vh < viewPort.h ? 0 : -a * (parseFloat($("#naviHandleArea").height()) / viewPort.vh);
        $("#naviHandle").css("top", a);
        $("#naviHandle").css("left", b)
    }
}

function moveContentsViewer() {
    var a = $(window).width(),
        b = $(window).height(),
        c = parseFloat($("#naviHandle").css("top")),
        d = parseFloat($("#naviHandle").css("left")),
        e = parseFloat($("#cover_view_control").width()),
        f = parseFloat($("#cover_view_control").height());
    d = -(d * (e / parseFloat($("#naviHandleArea").width())));
    c = -(c * (f / parseFloat($("#naviHandleArea").height())));
    e < a && (d = (a - e) / 2);
    f < b && (c = (b - f) / 2);
    $("#bookcover").offset({
        top: c,
        left: d
    });
    $("#cover_view_control").offset({
        top: c,
        left: d
    });
    $("#canvas_highlight").offset({
        top: c,
        left: d
    });
    $("#cover_drawing").offset({
        top: c,
        left: d
    })
}

function moveContentsByArrow(a) {
    var b = $(window).width(),
        c = $(window).height(),
        d = viewBox.moving_step * (parseInt(viewBox.zoom) / 100);
    switch (a) {
        case "left":
            a = parseFloat($("#cover_view_control").css("left")) + d;
            0 < a && (a = 0);
            $("#cover_view_control").offset({
                left: a
            });
            $("#canvas_highlight").css("left", a);
            $("#cover_drawing").css("left", a);
            break;
        case "right":
            a = parseFloat($("#cover_view_control").css("left")) - d;
            d = parseFloat($("#cover_view_control").css("left")) - d;
            b -= parseFloat($("#cover_view_control").width());
            d < b && (a = b);
            $("#cover_view_control").offset({
                left: a
            });
            $("#canvas_highlight").css("left", a);
            $("#cover_drawing").css("left", a);
            break;
        case "up":
            a = parseFloat($("#cover_view_control").css("top")) + d;
            0 < a && (a = 0);
            $("#cover_view_control").offset({
                top: a
            });
            $("#canvas_highlight").css("top", a);
            $("#cover_drawing").css("top", a);
            break;
        case "down":
            a = parseFloat($("#cover_view_control").css("top")) - d,
                d = parseFloat($("#cover_view_control").css("top")) - d,
                b = c - parseFloat($("#cover_view_control").height()),
                d < b && (a = b),
                $("#cover_view_control").offset({
                    top: a
                }),
                $("#canvas_highlight").css("top", a),
                $("#cover_drawing").css("top", a)
    }
    moveNaviHandle()
}

// 2019.01.28 왕예나 수정
// function resizeOnePage() {
//     var a = $(window).width(),
//         b = $(window).height(),
//         c = a / epubDB.epubInfo.width;
//     a < b && isIpad() && (c = b / epubDB.epubInfo.height);
//     var oneW = (a / 2) / (parseFloat(epubDB.epubInfo.width) + 58),
//         oneH = b / (parseFloat(epubDB.epubInfo.height) + 58),
//         e = epubDB.epubInfo.width * oneW;
//     oneW = Math.min(oneW, oneH);
//     oneH = epubDB.epubInfo.height * oneW;

//     $("#cover_onepage").width(epubDB.epubInfo.width);
//     $("#cover_onepage").height(epubDB.epubInfo.height);
//     $("#frame_onepage").width(epubDB.epubInfo.width);
//     $("#frame_onepage").height(epubDB.epubInfo.height);
//     $(".scroll-wrapper").width(epubDB.epubInfo.width).height(epubDB.epubInfo.height);
//     $(".scroll-wrapper-tourch").width(epubDB.epubInfo.width * c).height(epubDB.epubInfo.height * c);
//     // detectIE() ? $("#frame_onepage").css("zoom", c) : ($("#frame_onepage").css("zoom", 1), $("#frame_onepage").css("-moz-transform", "scale(" + c + ")"), $("#frame_onepage").css("-moz-transform-origin", "0 0"), $("#frame_onepage").css("-o-transform", "scale(" + c + ")"), $("#frame_onepage").css("-o-transform-origin", "0 0"), $("#frame_onepage").css("-webkit-transform", "scale(" + c + ")"), $("#frame_onepage").css("-webkit-transform-origin", "0 0"));
//     $(".frame_cover").width(epubDB.epubInfo.width * c).height(epubDB.epubInfo.height * c);
//     $("#drawingCanvasOnepage").width(2 * epubDB.epubInfo.width * c);
//     $("#drawingCanvasOnepage").height(epubDB.epubInfo.height * c);
//     epubDB.epubInfo.height * c < b ? (b = (b - epubDB.epubInfo.height * c) / 2, $(".frame_cover").css("top", b)) : (b = 0, $(".frame_cover").css("top", 0));
//     epubDB.epubInfo.width * c < a ? (b = (a - epubDB.epubInfo.width * c) / 2, $(".frame_cover").css("left", b)) : (b = 0, $(".frame_cover").css("left", 0));
//     $("#drawingCanvasOnepage").parent().css("top", b);
//     $("#drawingCanvasOnepage").parent().css("left", 0);
//     $("#drawingCanvasOnepage").parent().css("position", "absolute");
//     drawingCanvasOnepage.clear();
//     drawingCanvasOnepage.setWidth(2 * epubDB.epubInfo.width * c);
//     drawingCanvasOnepage.setHeight(epubDB.epubInfo.height * c);
//     drawingCanvasOnepage.setZoom(c);
//     drawingCanvasOnepage.renderAll();
//     null != localStorage.getItem("drawing_" + epub_code) && (drawingData = JSON.parse(localStorage.getItem("drawing_" + epub_code)), null != localStorage.getItem("drawing_" + epub_code) && drawingCanvasOnepage.loadFromJSON(drawingData[currentOnePageIdx % 2 ? currentOnePageIdx - 1 : currentOnePageIdx], function() {
//         drawingCanvasOnepage.renderAll()
//     }));
//     drawingCanvasOnepage.renderAll();
//     disableSelectObjectOnepage();
//     a = 0 == currentOnePageIdx % 2 ? 0 : epubDB.epubInfo.width * c;
//     $("#drawingCanvasOnepage").css("left", -a)

//     $("#cover_onepage").height(oneH + 20 * oneW / c - 10);
//     // $("#cover_onepage").offset({
//     //     left: b - 70 * oneW / 2,
//     //     top: e - 20 * oneW / 2 - 2
//     // })
//     // $(window).width();
//     // var a = $(window).height(),
//     //     b = $(window).width() / 2,
//     //     c = $(window).width() / 2 / (parseFloat(epubDB.epubInfo.width) + 58),
//     //     d = $(window).height() / (parseFloat(epubDB.epubInfo.height) + 58);
//     // c = Math.min(c, d);
//     // var e = epubDB.epubInfo.width * c;
//     // d = epubDB.epubInfo.height * c;
//     // $("#bookcover").width(2 * e + 70 * c);
//     // $("#bookcover").height(d + 20 * c);
//     // e = 0;
//     // d < a && (e = (a - d) / 2);
//     // a = b - epubDB.epubInfo.width * c;
//     // $("#bookcover").offset({
//     //     left: a - 70 * c / 2,
//     //     top: e - 20 * c / 2 - 2
//     // })

//     // 2019.01.18 왕예나 추가
//     // if (isWebview) {
//     //     $(".quickMenu .quickbtn .btnQuickText").css({
//     //         width: 0,
//     //         height: 0
//     //     });
//     //     $(".btnQuickText").parent().css("display", "none");
//     //     // $(".btnQuickText").parent().css({
//     //     //     width: 0,
//     //     //     height: 0
//     //     // });

//     //     // 퀵메뉴 돌려놓기
//     //     $(".quickMenu").css({
//     //         left: "",
//     //         top: ""
//     //     });
//     //     hideQuickMenu();

// 	// 	$("#naviViewport").css({
//     //         left: "",
//     //         top: ""
//     //     });
//     // } else {
//     //     console.log('여기');
        
//     //     $("#cover_onepage").css("left","");
//     // }
// }

function resizeOnePage() {
    var a = $(window).width(),
        b = $(window).height(),
        c = a / epubDB.epubInfo.width;
    a < b && isIpad() && (c = b / epubDB.epubInfo.height);
    $("#cover_onepage").width(a);
    $("#cover_onepage").height(b);
    $("#frame_onepage").width(epubDB.epubInfo.width);
    $("#frame_onepage").height(epubDB.epubInfo.height);
    $(".scroll-wrapper").width(a).height(b);
    $(".scroll-wrapper-tourch").width(a).height(b);
    detectIE() ? $("#frame_onepage").css("zoom", c) : ($("#frame_onepage").css("zoom", 1), $("#frame_onepage").css("-moz-transform", "scale(" + c + ")"), $("#frame_onepage").css("-moz-transform-origin", "0 0"), $("#frame_onepage").css("-o-transform", "scale(" + c + ")"), $("#frame_onepage").css("-o-transform-origin", "0 0"), $("#frame_onepage").css("-webkit-transform", "scale(" + c + ")"), $("#frame_onepage").css("-webkit-transform-origin", "0 0"));
    $(".frame_cover").width(epubDB.epubInfo.width * c).height(epubDB.epubInfo.height * c);
    $("#drawingCanvasOnepage").width(2 * epubDB.epubInfo.width * c);
    $("#drawingCanvasOnepage").height(epubDB.epubInfo.height * c);
    epubDB.epubInfo.height * c < b ? (b = (b - epubDB.epubInfo.height * c) / 2, $(".frame_cover").css("top", b)) : (b = 0, $(".frame_cover").css("top", 0));
    epubDB.epubInfo.width * c < a ? (b = (a - epubDB.epubInfo.width * c) / 2, $(".frame_cover").css("left", b)) : (b = 0, $(".frame_cover").css("left", 0));
    $("#drawingCanvasOnepage").parent().css("top", b);
    $("#drawingCanvasOnepage").parent().css("left", 0);
    $("#drawingCanvasOnepage").parent().css("position", "absolute");
    drawingCanvasOnepage.clear();
    drawingCanvasOnepage.setWidth(2 * epubDB.epubInfo.width * c);
    drawingCanvasOnepage.setHeight(epubDB.epubInfo.height * c);
    drawingCanvasOnepage.setZoom(c);
    drawingCanvasOnepage.renderAll();
    null != localStorage.getItem("drawing_" + epub_code) && (drawingData = JSON.parse(localStorage.getItem("drawing_" + epub_code)), null != localStorage.getItem("drawing_" + epub_code) && drawingCanvasOnepage.loadFromJSON(drawingData[currentOnePageIdx % 2 ? currentOnePageIdx - 1 : currentOnePageIdx], function() {
        drawingCanvasOnepage.renderAll()
    }));
    drawingCanvasOnepage.renderAll();
    disableSelectObjectOnepage();
    a = 0 == currentOnePageIdx % 2 ? 0 : epubDB.epubInfo.width * c;
    $("#drawingCanvasOnepage").css("left", -a)

    // 2019.01.18 왕예나 추가
    $(".page_loader").css({
        "width": epubDB.epubInfo.width * c,
        "height": epubDB.epubInfo.height,
        "left": "",
        "top": ""
    });
    if (isWebview) {
        $(".quickMenu .quickbtn .btnQuickText").css({
            width: 0,
            height: 0
        });
        $(".btnQuickText").parent().css("display", "none");
        // $(".btnQuickText").parent().css({
        //     width: 0,
        //     height: 0
        // });

        // 퀵메뉴 돌려놓기
        $(".quickMenu").css({
            left: "",
            top: ""
        });
        hideQuickMenu();

		$("#naviViewport").css({
            left: "",
            top: ""
        });
    }
}

function pageZoom(a) {
    detectIE() ? ($(".page_frame_left").css("zoom", a), $(".page_frame_right").css("zoom", a)) : ($(".page_frame_left").css("zoom", 1), $(".page_frame_right").css("zoom", 1), $(".page_frame_left").css("-moz-transform", "scale(" + a + ")"), $(".page_frame_left").css("-moz-transform-origin", "0 0"), $(".page_frame_left").css("-o-transform", "scale(" + a + ")"), $(".page_frame_left").css("-o-transform-origin", "0 0"), $(".page_frame_left").css("-webkit-transform", "scale(" + a + ")"), $(".page_frame_left").css("-webkit-transform-origin", "0 0"), $(".page_frame_right").css("-moz-transform", "scale(" + a + ")"), $(".page_frame_right").css("-moz-transform-origin", "0 0"), $(".page_frame_right").css("-o-transform", "scale(" + a + ")"), $(".page_frame_right").css("-o-transform-origin", "0 0"), $(".page_frame_right").css("-webkit-transform", "scale(" + a + ")"), $(".page_frame_right").css("-webkit-transform-origin", "0 0"))
}

function loadThumb() {
    $("#contents_thumbnails").empty();
    $("#contents_thumbnails").css("width", 112 * (epubDB.totalCnt() - 1) + "px");
    for (var a, b = 1; b < epubDB.totalCnt(); b++) a = epubDB.getThumbnail(epubPath, b),
        $("#contents_thumbnails").append('<li onclick="locationPage(' + parseInt(a.idx) + ')" style="background:#000;"><img src="' + a.img + '"><span>' + (b - parseInt(epubDB.epubInfo.startpage)) + "</span></li>");
    sideMenu.thumb.isLoaded = !0;
    classie.add(sideMenu.thumb, "cbp-spmenu-open");
    resizeViewer()
}

function initViewer() {
    hl_canvas = document.getElementById("canvas_highlight");
    hl_context = hl_canvas.getContext("2d");
    sideMenu.setMenu(document.getElementById("cbp-spmenu-s1"), SIDEMENU_TOC);
    sideMenu.setMenu(document.getElementById("cbp-spmenu-s2"), SIDEMENU_THUMB);
    sideMenu.setMenu(document.getElementById("cbp-spmenu-s3"), SIDEMENU_BOOKMARK);
    sideMenu.setMenu(document.getElementById("cbp-spmenu-s4"), SIDEMENU_SEARCH);
    document.getElementById("btn_toc").onclick = function() {
        sideMenu.toggle(SIDEMENU_TOC);
        $("#cbp-spmenu-s1").hasClass("cbp-spmenu-open") || $("#menu_contents .collapse").collapse("hide")
    };
    document.getElementById("btn_allpage").onclick = function() {
        sideMenu.toggle(SIDEMENU_THUMB)
    }
}

function initPageSlider() {}

function menuToggle() {
    "0px" == $("#bottom_menu").css("bottom") ? menuClose() : menuOpen()
}

function menuOpen() {
    $("#bottom_menu").animate({
        bottom: "0px"
    });
    $(".bottom_menu_handle").addClass("off")
}

function menuClose() {
    $("#bottom_menu").animate({
        bottom: "-" + $(".navBottom").height() + "px"
    });
    $(".bottom_menu_handle").removeClass("off")
}

function menuCloseFix() {
    $("#bottom_menu").css("bottom", "-" + $(".navBottom").height() + "px");
    $(".bottom_menu_handle").removeClass("off")
}

function openDrawing() {
    sideMenu.closeAll();
    $("#tool_drawing").show();
    isPopupOpened ? $("#cover_drawing_popup").css("pointer-events", "auto") : "oneside" == viewBox.mode ? $("#cover_onepage .canvas-container").css("pointer-events", "auto") : $("#cover_drawing").css("pointer-events", "auto");
    //void 0 !== window.android && window.android.setDrawingChange(!0)
}

function closeDrawing() {
    $("#tool_drawing").hide();
    $("#cover_drawing").css("pointer-events", "none");
    $("#cover_onepage .canvas-container").css("pointer-events", "none");
    $("#cover_drawing_popup").css("pointer-events", "none");
    saveDrawingData();
    void 0 !== window.android && window.android.setDrawingChange(!1)
}

function closeNavi() {
    $(".top_menu .zoom").removeClass("active");
    $("#touchscroll").css("pointer-events", "none");
    viewBox.zoom = 100;
    resizeViewer()
}

function hideQuickMenu() {
    $(".quickMenuContent").hide();
    $("#quickMenuToggle").removeClass("btnQuickClose");
    $("#quickMenuToggle").addClass("btnQuickMenu")
}

function setOnHighlight(a) {
    a ? $("#canvas_highlight").css("pointer-events", "auto") : disableHighlight()
}

function setViewMode(a) {
    closeDrawing();
    sideMenu.closeAll();
    1 == a ? (drawingCanvasOnepage.clear(), viewBox.mode = "oneside", currentOnePageIdx = currentPageIdx, $("#frame_onepage").prop("src", getPage(currentOnePageIdx)), $("#cover_onepage").show(), $("#cover_drawing").hide()) : (drawingCanvas.clear(), viewBox.mode = "both", $("#cover_onepage").hide(), $("#cover_drawing").show(), loadDrawData());
    resizeViewer()
}

function initZoom() {
    $("#btn_zoom").removeClass("btnZoomIn").addClass("btnZoomOut");
    $(".top_menu .zoom").addClass("active");
    $("#touchscroll").css("pointer-events", "auto");
    $("#zoomSliderTxt").text("200%");
    viewBox.zoom = 200;
    isZooming = !0;
    resizeViewer()
}

function closeZoom() {
    $("#btn_zoom").removeClass("btnZoomOut").addClass("btnZoomIn");
    $(".top_menu .zoom").removeClass("active");
    $("#touchscroll").css("pointer-events", "none");
    $("#zoomSliderTxt").text("100%");
    viewBox.zoom = 100;
    isZooming = !1;
    resizeViewer()
}

function loadPageWithBG() {
    var a = currentPageIdx;
    $(".page_frame_left").attr("src", getPage(a));
    a + 1 <= pages.length - 1 ? $(".page_frame_right").attr("src", getPage(a + 1)) : $(".page_frame_right").attr("src", blankPage)
}

function showBoard() {
    $("#popupBoard").show()
}

function showSnackBar(a) {
    var b = document.getElementById(a);
    b.className = "show";
    setTimeout(function() {
            b.className = b.className.replace("show", "")
        },
        2E3)
}

// 2019.01.29 왕예나 수정
function toggleQuickMenu() {
    isDraggingQuick || ($(".quickMenuContent").toggle(), "none" == $(".quickMenuContent").css("display") ? ($("#quickMenuToggle").removeClass("btnQuickClose"), $("#quickMenuToggle").addClass("btnQuickMenu")) : ($("#quickMenuToggle").removeClass("btnQuickMenu"), $("#quickMenuToggle").addClass("btnQuickClose")));
}

var curDown = !1,
    lastXPos = 0,
    lastYPos = 0,
    curYPos = 0,
    curXPos = 0,
    popupDrawingCanvas = null;
$(document).ready(function() {
    $.ajaxSetup({
        cache: true
    });
    $(".scrollable-horizontal-x").scrollbar({
        autoScrollSize: !1,
        scrollx: $(".external-scroll_x")
    });
    
    initViewer();
    loadEpub();
    $(window).resize(function() {
        setTimeout(function() {
                resizeViewer()
            },
            500)
    });
    initHighlightCanvas();
    $("#menu_contents").on("show.bs.collapse", function(a) {
        $("#menu_contents .collapse").not(document.getElementById(a.target.id.replace("#", ""))).collapse("hide")
    });
    $('a[data-toggle="tab"]').on("shown.bs.tab", function(a) {
        a = $(a.target).attr("href");
        "#tabBoardList" == a ? ($(".slideItemContent .itemTabMenu .itemTabImg01").addClass("on"), $(".slideItemContent .itemTabMenu .itemTabImg02").removeClass("on"), $(".slideItemContent .itemTabMenu .itemTabImg03").removeClass("on")) : "#tabLinkList" == a ? ($(".slideItemContent .itemTabMenu .itemTabImg01").removeClass("on"), $(".slideItemContent .itemTabMenu .itemTabImg02").addClass("on"), $(".slideItemContent .itemTabMenu .itemTabImg03").removeClass("on")) : "#tabBookmarkList" == a ? ($(".slideItemContent .itemTabMenu .itemTabImg01").removeClass("on"), $(".slideItemContent .itemTabMenu .itemTabImg02").removeClass("on"), $(".slideItemContent .itemTabMenu .itemTabImg03").addClass("on")) : "#tabWebLink" == a ? ($(".btnMyLinkWeb").addClass("on"), $(".btnMyLinkFile").removeClass("on")) : "#tabFileLink" == a && ($(".btnMyLinkWeb").removeClass("on"), $(".btnMyLinkFile").addClass("on"))
    });
    $(".page_frame_right").on("load", function() {
        $(".page_loader").hide()
    });
    $("#framePopupContents").on("load", function() {
        if (!(0 <= $("#framePopupContents").attr("src").indexOf("blank.html") || 0 <= $("#framePopupContents").attr("src").indexOf("preloading.html"))) {
            $("#framePopupContents").contents().find("body").append("<script>var viewer = window.parent.viewer;\x3c/script>");
            $("#framePopupContents").contents().find("body").append('<div id="tool_drawing" class="drawing_pop" style="z-index: 50020;">\t<div class="drawing_pop_title">\t\t\t<p>\uadf8\ub9ac\uae30</p>\t\t\t<button type="button" id="" class="btnClose" title="\ub2eb\uae30" onclick="closeDrawing();" style="position: absolute;top: 13px;right: 15px;"></button>\t\t</div>\t\t<div class="drawing_contents">\t\t\t<div class="drawing_con_icon">\t\t\t\t<div class="drawing_line on" id="btn_drawing_line"></div>\t\t\t<div class="drawing_free" id="btn_drawing_pencil"></div>\t\t\t\t<div class="drawing_highlight" id="btn_drawing_highlight"></div>\t\t\t\t<div class="drawing_eraser" id="btn_drawing_eraser"></div>\t\t\t<div class="drawing_eraser2" id="btn_drawing_eraserall"></div>\t\t\t</div>\t\t\t<div class="drawing_color">\t\t\t<div class="drawing_color_selector">\t\t\t\t\t\t<input type="color" id="drawing-color" class="select_color" value="#FF0000">\t\t\t\t</div>\t\t\t\t<div class="drawing_pen_option">\t\t\t\t\t<div class="line_height">\t\t\t\t\t<div class="line_1 on" id="btn_drawing_linewidth1"></div>\t\t\t\t\t<div class="line_2" id="btn_drawing_linewidth2"></div>\t\t\t\t\t\t<div class="line_3" id="btn_drawing_linewidth3"></div>\t\t\t\t\t\t<div class="line_4" id="btn_drawing_linewidth4"></div>\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div class="drawing_oper">\t\t\t\t\t\t<div id="drawing-alpha"></div>\t\t\t\t\t<div class="oper_value">100</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>\t\t<div class="drawing_disable">\t\t\t</div>\t\t</div>\t<div class="drawing_pop_bottom">\t\t\t<div class="visible" id="btn_hide_drawing"></div>\t\t\t<div class="newly">\t\t\t<div class="expand_tool"></div>\t\t</div>\t</div></div>');
            $("#framePopupContents").contents().find("#contentsWrap").after('<div id="cover_drawing"><canvas id="drawingCanvas"></canvas></div>');
            var a = window.frames.framePopupContents.document.getElementsByTagName("head")[0],
                c = document.createElement("link");
            c.rel = "stylesheet";
            c.href = "./resources/css/nouislider.min.css";
            a.appendChild(c);
            c = document.createElement("link");
            c.rel = "stylesheet";
            c.href = "./resources/css/popup.css";
            a.appendChild(c);
            c = document.createElement("link");
            c.rel = "stylesheet";
            c.href = "./resources/css/spectrum.css";
            a.appendChild(c);
            c = document.createElement("link");
            c.rel = "stylesheet";
            c.href = "./resources/css/jquery-ui-drag.min.css";
            a.appendChild(c);
            window.frames.framePopupContents.document.getElementsByTagName("body")
        }
    });
    // 2019.01.24 왕예나 수정
    loadWebLink();
    // var toggleQuickMenu = function() {
    //     isDraggingQuick || ($(".quickMenuContent").toggle(), "none" == $(".quickMenuContent").css("display") ? ($("#quickMenuToggle").removeClass("btnQuickClose"), $("#quickMenuToggle").addClass("btnQuickMenu")) : ($("#quickMenuToggle").removeClass("btnQuickMenu"), $("#quickMenuToggle").addClass("btnQuickClose")));
    // }
    $(".quickMenu").draggable({
        cancel: '.clickable',
        //delay: 50,
        start: function() {
            isDraggingQuick = true;
            $("#quickMenuToggle").off("click", toggleQuickMenu);
            if ($(".quickMenuContent").css("display") !== "none"){
                //$(".quickMenuContent").css("right", "auto");
                // if (window.android !== undefined) {
                //     $(".quickMenuContent").css("left", "-170px");
                // } else {
                //     $(".quickMenuContent").css("left", "-230px");
                // }
                $(".quickMenuContent").css("left", "-230px");
                $(".quickMenuContent").css("right", "auto");
            }
        },
        drag: function() {
            $("#quickMenuToggle").off("click", toggleQuickMenu);
        },
        stop: function() {
            //var w = $(window).width();
            $(".quickMenuContent").css("right", "auto");
            // if (window.android !== undefined) {
            //     $(".quickMenuContent").css("left", "-170px");
            // } else {
            //     $(".quickMenuContent").css("left", "-230px");
            // }
            $(".quickMenuContent").css("left", "-230px");

            // if (parseInt($(".quickMenu").css("left").replace("px", "")) < (w - $(".quickMenuContent").width())) {
            //     //$(".quickMenuContent").css("right", "auto");
            //     //$(".quickMenuContent").css("left", "-230px");
            //     $(".quickMenuContent").css("right", "auto");
            // } else {
            //     $(".quickMenuContent").css("right", "10px");
            // }

            //setTimeout(function() {
                $("#quickMenuToggle").on("click", toggleQuickMenu);
                isDraggingQuick = false;
            //}, 50);
        }
    });

    // $(".quickMenu").draggable({
    //     cancel: ".clickable",
    //     revert: !1,
    //     iframeFix: !0,
    //     start: function() {
    //         isDraggingQuick = !0
    //     },
    //     drag: function() {},
    //     stop: function() {
    //         var a = $(window).width();
    //         $(window).height();
    //         parseInt($(".quickMenu").css("left").replace("px", "")) < a - $(".quickMenuContent").width() ? $(".quickMenuContent").css("right", "auto") : $(".quickMenuContent").css("right", "20px");
    //         parseInt($(".quickMenu").css("top").replace("px", "")) < $(".quickMenuContent").height() + 100 ? $(".quickMenuContent").css("top", "auto") : "purple" == skin ? $(".quickMenuContent").css("top", "-540px") : $(".quickMenuContent").css("top", "-420px");
    //         setTimeout(function() {
    //                 isDraggingQuick = !1
    //             },
    //             500)
    //     }
    // }).css("bottom", "120px").css("right", "20px");
    $("#drawing-color").spectrum({
        preferredFormat: "hex3",
        change: function(a) {}
    });
    setTimeout(function() {
            $("#bookmark_left").show();
            $("#bookmark_right").show();
            $("#bottom_menu").show()
        },
        500);
    $("#btn_drawing_text").click(function() {
        $(".drawing_text_on").show();
        setPenMenu(6)
    });
    $("#btn_back").click(function() {
        goBack()
    });
    $("#btn_forward").click(function() {
        goForward()
    });
    $(".menu_handle").click(function() {
        menuToggle()
    });
    var a = $(window).width();
    $(window).height();
    a = a - 150 - 90;
    $("#naviViewport").draggable().css("top", "50px").css("left", a + "px");
    $("#naviHandle").draggable({
        containment: "#naviHandleArea",
        scroll: !1,
        start: function() {},
        drag: function() {
            moveContentsViewer()
        },
        stop: function() {}
    });
    $("#tool_drawing").draggable();
    $("#btn_close_navi").click(function() {
        closeZoom()
    });
    $(".page_prev").click(function() {
        movePrev()
    });
    $(".page_next").click(function() {
        moveNext()
    });
    $("#btn_home").click(function() {
        showMain()
    });
    $("#goto_btn").click(function() {
        "" == $("#pagenum").val() || 0 > parseInt($("#pagenum").val()) || parseInt($("#pagenum").val()) > epubDB.totalCnt() - 1 ? void 0 !== window.android ? window.android.alert("\uc720\ud6a8 \ud398\uc774\uc9c0\uac00 \uc544\ub2d9\ub2c8\ub2e4.") : alert("\uc720\ud6a8 \ud398\uc774\uc9c0\uac00 \uc544\ub2d9\ub2c8\ub2e4.") : locationPage(eval($("#pagenum").val()))
    });
    $("#pagenum").keyup(function(a) {
        13 == a.keyCode && ("" == $("#pagenum").val() || 0 > parseInt($("#pagenum").val()) || parseInt($("#pagenum").val()) > epubDB.totalCnt() - 1 ? void 0 !== window.android ? window.android.alert("\uc720\ud6a8 \ud398\uc774\uc9c0\uac00 \uc544\ub2d9\ub2c8\ub2e4.") : alert("\uc720\ud6a8 \ud398\uc774\uc9c0\uac00 \uc544\ub2d9\ub2c8\ub2e4.") : locationPage(eval($("#pagenum").val())))
    });
    $("#goto_btn_thumbs").click(function() {
        "" != $("#pagenum_thumbs").val() && locationPage(eval($("#pagenum_thumbs").val()))
    });
    $("#pagenum_thumbs").keyup(function(a) {
        13 == a.keyCode && "" != $("#pagenum_thumbs").val() && locationPage(eval($("#pagenum_thumbs").val()))
    });
    $("#btn_search").click(function() {
        keyword = $("#search_keyword").val();
        0 == keyword.length ? ($("#search_keyword").focus(), $("#search_keyword").addClass("select")) : searchKeyword(keyword)
    });
    $("#search_keyword").keyup(function(a) {
        13 == a.keyCode ? (keyword = $("#search_keyword").val(), searchKeyword(keyword)) : 0 < $("#search_keyword").val().length && $("#search_keyword").removeClass("select")
    });
    $("#btnCloseTextSelect").click(function() {
        disableHighlight();
        $("#popupTextSelector").hide()
    });
    $("#btnCloseWebLink").click(function() {
        $("#popupWebLink").modal("hide")
    });
    $("#btnSearchNaver").click(function() {
        window.open("https://search.naver.com/search.naver?where=nexearch&query=" + encodeURIComponent(selectedKeyword) + "&sm=top_hty&fbm=1&ie=utf8");
        disableHighlight();
        $("#popupTextSelector").hide()
    });
    $("#btnSearchDaum").click(function() {
        window.open("http://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=" + encodeURIComponent(selectedKeyword) + "&tltm=1");
        disableHighlight();
        $("#popupTextSelector").hide()
    });
    $("#btnSearchGoogle").click(function() {
        window.open("http://www.google.com/search?q=" + encodeURIComponent(selectedKeyword));
        disableHighlight();
        $("#popupTextSelector").hide()
    });
    $("#btnTextCopy").click(function() {
        copyToClipboard(document.getElementById("copiedText"));
        disableHighlight();
        $("#popupTextSelector").hide()
    });
    $("#btn_page_prev").click(function() {
        movePrev("oneside" == viewBox.mode)
    });
    $("#btn_page_next").click(function() {
        moveNext("oneside" == viewBox.mode)
    });
    $("#btn_add_bookmark").click(function() {
        $(".page_selector").show()
    });
    $("#progressChkAll").click(function() {
        $("#progressList").find("input").prop("checked", $(this).is(":checked"))
    });
    //2019.01.18 왕예나 추가
    $(".progressDel").click(function() {
        $("#chk_progress:checked").each(function() {
            removeProgress($(this).val())
        });
        $("#progressChkAll").prop("checked", !1)
    });
    $("#btnProgressAdd").click(function() {
        sideMenu.closeAll();
        $("#popupProgress").show()
    });
    $("#linkSelectAll").click(function() {
        $("#webLinkList").find("input").prop("checked", $(this).is(":checked"))
    });
    $("#linkDel").click(function() {
        $("#chk_weblink:checked").each(function() {
            WebLink.remove($(this).val())
        });
        $("#linkSelectAll").prop("checked", !1)
    });
    $("#linkAdd").click(function() {
        $("#popupStorage").modal()
    });
    $("#bookmarkSelectAll").click(function() {
        $("#bookmarkList").find("input").prop("checked", $(this).is(":checked"))
    });
    $("#bookmarkDel").click(function() {
        $("#chk_bookmark:checked").each(function() {
            removeBookmark($(this).val())
        });
        $("#bookmarkSelectAll").prop("checked", !1)
    });
    $(".btn_popup_close").click(function() {
        $(".page_selector").hide()
    });
    $("#page_selector_left").click(function() {
        addBookmark(0);
        $(".page_selector").hide()
    });
    $("#page_selector_right").click(function() {
        addBookmark(1);
        $(".page_selector").hide()
    });
    $("#btn_zoom").click(function() {
        void 0 !== window.viewer && "undefined" !== typeof window.viewer.showZoomView ? window.viewer.showZoomView() : isZooming ? closeZoom() : (initZoom(), sideMenu.closeAll())
    });
    $("#btn_vivasam").click(function() {
        viewer.openVivasam()
    });
    $("#btn_pds").click(function() {
        window.viewer.openPDS()
    });
    $("#btn_play_instrument").click(function() {
        window.viewer.openPlayInstrument()
    });
    // $("#btn_gym").click(function() {
    //     window.open(epubDB.getBasePath() + "/contents/common/popup/visang_gym/visang_gym.html", "")
    // });
    // 2019.01.15 안드로이드 뷰어 왕예나 수정
    $("#btn_stopwatch").click(function() {
        if (isWebview) window.android.openInternalBrowser("/resources/contents/popup/timer/timer.html");
        else window.open("./resources/contents/popup/timer/timer.html", "")
    });
    $("#btn_timer").click(function() {
        if (isWebview) window.android.openInternalBrowser("/resources/contents/popup/timer/timer.html");
        else window.open("./resources/contents/popup/timer/timer.html", "")
    });
    $("#btn_sikimi").click(function() {
        if (isWebview) window.android.openInternalBrowser("/resources/contents/popup/makedo/sikimi.html");
        else window.open("./resources/contents/popup/makedo/sikimi.html", "")
    });
    $("#btn_attention").click(function() {
        if (isWebview) window.android.openInternalBrowser("/resources/contents/popup/focus/helper.html");
        else window.open("./resources/contents/popup/focus/helper.html", "")
    });
    // $("#btn_musicnote").click(function() {
    //     window.open(epubDB.getBasePath() + "/contents/common/popup/MusicMaker/MusicMaker.html", "")
    // });
    // $("#btn_rhythm").click(function() {
    //     window.open(epubDB.getBasePath() + "/contents/common/popup/JanguMaker/JanguMaker.html", "")
    // });
    $(".zoomIn").click(function() {
        300 <= viewBox.zoom || (viewBox.zoom += 50, $("#zoomSliderTxt").text(viewBox.zoom + "%"), resizeViewer())
    });
    $(".zoomOut").click(function() {
        100 >= viewBox.zoom || (viewBox.zoom -= 50, $("#zoomSliderTxt").text(viewBox.zoom + "%"), resizeViewer())
    });
    $(".btn_close").click(function() {
        sideMenu.closeAll()
    });
    // 2019.01.24 왕예나 수정
    $("#quickMenuToggle").on("click", toggleQuickMenu);
    // $("#quickMenuToggle").click(function() {
    //     isDraggingQuick || ($(".quickMenuContent").toggle(), "none" == $(".quickMenuContent").css("display") ? ($("#quickMenuToggle").removeClass("btnQuickClose"), $("#quickMenuToggle").addClass("btnQuickMenu")) : ($("#quickMenuToggle").removeClass("btnQuickMenu"), $("#quickMenuToggle").addClass("btnQuickClose")))
    // });
    $("#btn_close_thumbnails").click(function() {
        sideMenu.close(SIDEMENU_THUMB)
    });
    // 2019.01.17 왕예나 수정
    // 임시로, 퀵메뉴에서 텍스트 선택을 display: none;
    // 추후에 업데이트할 때, 한쪽보기에서도 텍스트 선택 가능하게 만들기
    $("#btn_onepage").click(function() {
        void 0 !== window.viewer && "undefined" !== typeof window.viewer.showSinglePage ? window.viewer.showSinglePage() : setViewMode(1)
        
        $(".quickMenu .quickbtn .btnQuickText").css({
            width: 0,
            height: 0
        });
        $(".btnQuickText").parent().css("display","none");
        // $(".btnQuickText").parent().css({
        //     width: 0,
        //     height: 0
        // });
    });
    $("#btn_bothpage").click(function() {
        setViewMode(2);
        $(".quickMenu .quickbtn .btnQuickText").css({
            width: width,
            height: height
        });
        $(".btnQuickText").parent().css("display","inline-block");
        // $(".btnQuickText").parent().css({
        //     width: width,
        //     height: height
        // });
    });

    // 2019.01.17 왕예나 추가
    // $("#btn_folder").click(function() {
    //     loadWebLink();
    // });

    $("#btn_storage").click(function() {
        $("#popupStorage").modal();
        sideMenu.closeAll()
    });
    $("#btnTextSelector").click(function() {
        disableHighlight();
        $("#popupTextSelector").hide();
        enableHighlight();
        showSnackBar("snackbar")
    });
    $("#btn_highlight").click(function() {
        sideMenu.closeAll();
        "none" == $("#canvas_highlight").css("pointer-events") ? (enableHighlight(), showSnackBar("snackbar")) : disableHighlight()
    });
    $("#btn_print").click(function() {
        printJS("cover_view_control", "html")
    });
    $("#btn_drawing").click(function() {
        sideMenu.closeAll();
        void 0 !== window.viewer && "undefined" !== typeof window.viewer.showDrawer ? window.viewer.showDrawer() : openDrawing()
    });
    $("#bookmark_left").click(function() {
        addBookmark(0)
    });
    $("#bookmark_right").click(function() {
        addBookmark(1)
    });
    $("#btn_progress").click(function() {
        sideMenu.closeAll();
        $("#popupProgressList").show();
    });
    $("#btn_close_viewer").click(function() {
        sideMenu.closeAll();
        $("#popupProgressNClose").show()
    });
    // $("#btn_capture").click(function() {
    //     sideMenu.closeAll();
    //     void 0 !== window.viewer && "undefined" !== typeof window.viewer.capture && window.viewer.capture();
    //     $(".tempAlertmessage").show()
    // });
    $("#btn_board").click(function() {
        sideMenu.closeAll();
        showBoard()
    });
    $("#btnSaveWebLink").click(function() {
        if ("" != $("#txtWebLinkUrl").val() && "" != $("#txtWebLinkName").val()) {
            var a = (new Date).getTime();
            WebLink.add(a, currentPageIdx, $("#txtWebLinkUrl").val(), $("#txtWebLinkName").val());
            $("#popupStorage").modal("hide");
            $("#txtWebLinkUrl").val("");
            $("#txtWebLinkName").val("");
            loadWebLink()
        }
    });
    $("#btn_mylink").click(function() {
        sideMenu.closeAll();
        void 0 !== window.viewer && "undefined" !== typeof window.viewer.showMyLink && window.viewer.showMyLink()
    });
    $("#btn_print").click(function() {
        sideMenu.closeAll();
        void 0 !== window.viewer && "undefined" !== typeof window.viewer.print && window.viewer.print()
    });
    // 2019.01.16 왕예나 추가
    $("#btnSaveProgressNClose").click(function() {
        var a = currentPageIdx,
            b = 2;
            //c = $("#progressClassNClose option:selected").val();
        addProgress(a,b);
        //addProgress(a);
        window.close()
    });
    $("#btnCloseProgress").click(function() {
        window.close()
    });
    $(".popProgressCon").attr("maxlength","12");
    $(".popProgressComplete .btnClose").attr("onclick", "$('#popupProgressList').hide();")
    $("#btnSaveProgress").click(function() {
        var a = $(".popProgressCon").val(),
            b = 1;
        //c = $("#progressClass option:selected").val();
        addProgress(a,b);
        //addProgress(a);
    });
    
    // 2019.01.18 왕예나 추가
    $("#btn_help").click(function() {
        $("#popupHelp").show()

        // 도움말 줄이기
        if (isWebview) {
            var isPhone = window.android.getHelpImgName() === "help_mobile";

            if (isPhone && viewPort.w < 481) {
                $(".pophelpModal .popCotentContainer .help_img").css({
                    width: "95%"
                });
            }
        }
    });
    $("#popupHelp .btnClose").click(function() {
        // 도움말 줄이기
        $(".pophelpModal .popCotentContainer .help_img").css({
            width: ""
        });
    });

    $(".expand_tool").click(function() {
        $(".drawing_contents").is(":hidden") ? ($("#tool_drawing").height("250"), $(".drawing_contents").show(), $(".expand_tool").removeClass("expanded")) : ($("#tool_drawing").height("95"), $(".drawing_contents").hide(), $(".expand_tool").addClass("expanded"))
    });
    $("#btn_close_drawing").click(function() {
        closeDrawing()
    });
    $("#btn_move_left").click(function() {
        moveContentsByArrow("left")
    });
    $("#btn_move_right").click(function() {
        moveContentsByArrow("right")
    });
    $("#btn_move_up").click(function() {
        moveContentsByArrow("up")
    });
    $("#btn_move_down").click(function() {
        moveContentsByArrow("down")
    });
    $("#btn_add_image").click(function() {});
    $("#btn_saveto_image").click(function() {
        window.open(drawingCanvas.toDataURL("png"))
    });
    $("#btn_hide_drawing").click(function() {
        isPopupOpened ? $("#cover_drawing_popup").is(":visible") ? ($("#cover_drawing_popup").hide(), $("#btn_hide_drawing").addClass("on")) : ($("#cover_drawing_popup").show(), $("#btn_hide_drawing").removeClass("on")) : "oneside" == viewBox.mode ? $("#drawingCanvasOnepage").is(":visible") ? ($("#drawingCanvasOnepage").hide(), $("#btn_hide_drawing").addClass("on")) : ($("#drawingCanvasOnepage").show(), $("#btn_hide_drawing").removeClass("on")) : $("#cover_drawing").is(":visible") ? ($("#cover_drawing").hide(), $("#btn_hide_drawing").addClass("on")) : ($("#cover_drawing").show(), $("#btn_hide_drawing").removeClass("on"))
    });
    $("#touchscroll").bind("touchmove", function(a) {
        touchMove(a);
        a.preventDefault()
    });
    $("#touchscroll").bind("touchstart", function(a) {
        touchDown(a);
        a.preventDefault()
    });
    $("#touchscroll").bind("touchend", function(a) {
        curDown = !1;
        a.preventDefault()
    });
    $("#touchscroll").bind("touchleave", function(a) {
        curDown = !1;
        a.preventDefault()
    });
    $("#touchscroll").mousemove(function(a) {
        touchMove(a)
    });
    $("#touchscroll").mousedown(function(a) {
        touchDown(a)
    });
    $("#touchscroll").mouseup(function() {
        curDown = !1
    });
    $("#touchscroll").mouseleave(function() {
        curDown = !1
    });
    $(".movehand").click(function() {
        $(".movehand").hasClass("active") ? ($(".movehand").removeClass("active"), $("#touchscroll").css("pointer-events", "none")) : ($(".movehand").addClass("active"), $("#touchscroll").css("pointer-events", "auto"))
    })
});
var fX = 0,
    fY = 0;

function touchMove(a) {
    if (1 == curDown && 100 < viewBox.zoom) {
        var b = $(window).width(),
            c = $(window).height();
        var d = isMobile() ? curXPos - a.touches[0].clientX : curXPos - a.clientX;
        d = fX - d;
        0 < d && (d = 0);
        var e = b - parseFloat($("#cover_view_control").width());
        d < e && (d = e);
        b = d;
        d = isMobile() ? curYPos - a.touches[0].clientY : curYPos - a.clientY;
        d = fY - d;
        0 < d && (d = 0);
        e = c - parseFloat($("#cover_view_control").height());
        d < e && (d = e);
        a = d;
        $("#bookcover").offset({
            left: b,
            top: a
        });
        $("#cover_view_control").offset({
            left: b,
            top: a
        });
        $("#canvas_highlight").css("left", b).css("top", a);
        $("#cover_drawing").css("left", b).css("top", a);
        moveNaviHandle()
    }
}

function touchDown(a) {
    fX = parseFloat($("#cover_view_control").css("left"));
    fY = parseFloat($("#cover_view_control").css("top"));
    curDown = !0;
    isMobile() ? (curXPos = a.touches[0].clientX, curYPos = a.touches[0].clientY) : (curXPos = a.clientX, curYPos = a.clientY);
    lastXPos = curXPos;
    lastYPos = curYPos
};




