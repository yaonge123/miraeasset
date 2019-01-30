var epubDB = {
        client: "MIRAE",
        base: null,
        page: null,
        toc: null,
        epubInfo: null,
        epubToc: null,
        pageInfo: null,
        historyBack: [],
        historyForward: [],
        totalCnt: function () {
            return this.base.pages.length
        },
        getBaseFolder: function () {
            return this.epubInfo.base_url
        },
        // 2019.01.17 왕예나 경로 수정
        getBasePath: function () {
            return "./files/contents/" + this.epubInfo.base_url
        },
        getThumbnail: function (b, c) {
            return c <= this.base.pages.length - 1 && "" != this.base.pages[c].thumbnail ? {
                idx: this.base.pages[c].idx,
                img: "./files/contents/" + this.epubInfo.base_url + "/ebook/OEBPS/pp_thumbnail/" + this.base.pages[c].thumbnail
            } : {
                idx: "0",
                img: "./resources/img/common/empty.jpg"
            }
        },
        addHistory: function (b) {
            10 < this.historyBack.length && this.historyBack.shift();
            this.historyBack[this.historyBack.length - 1] != b && this.historyBack.push(b);
            this.logHistory();
            this.setHistoryButtons()
        },
        getHistoryBack: function () {
            return this.historyForward
        },
        setHistoryBack: function () {
            if (1 >= this.historyBack.length) return NaN;
            this.historyForward.push(this.historyBack.pop());
            var b = this.historyBack[this.historyBack.length - 1];
            this.logHistory();
            this.setHistoryButtons();
            return b
        },
        setHistoryButtons: function () {
            1 >= this.historyBack.length && !$("#btn_back").hasClass("disabled") ? $("#btn_back").addClass("disabled") : 1 < this.historyBack.length && $("#btn_back").removeClass("disabled");
            0 != this.historyForward.length || $("#btn_forward").hasClass("disabled") ? 0 < this.historyForward.length && $("#btn_forward").removeClass("disabled") : $("#btn_forward").addClass("disabled")
        },
        getHistoryForward: function () {
            return this.historyForward
        },
        setHistoryForward: function () {
            if (0 ==
                this.historyForward.length) return NaN;
            var b = this.historyForward.pop();
            this.logHistory();
            return b
        },
        logHistory: function () {
            this.historyBack.forEach(function (b, c, a) {});
            this.historyForward.forEach(function (b, c, a) {})
        }
    },
    WebLink = {
        links: [],
        getLink: function () {
            return this.links
        },
        add: function (b, c, a, e) {
            for (var d = 0; d < this.links.length; d++)
                if (this.links[d].url == a && this.links[d].name == e) return;
            0 > a.indexOf("http") && (a = "http://" + a);
            this.links.push({
                idx: b,
                pidx: c,
                url: a,
                name: e
            });
            this.save()
        },
        remove: function (b) {
            for (var c = -1, a = 0; a < this.links.length; a++)
                if (null != this.links[a] && this.links[a].idx == parseInt(b)) {
                    c = a;
                    break
                } this.links.splice(c, 1);
            this.save();
            loadWebLink()
        },
        getLength: function () {
            return this.links.length
        },
        load: function () {
            null != localStorage.getItem("weblink_" + epub_code) ? this.links = JSON.parse(localStorage.getItem("weblink_" + epub_code)) : this.links = []
        },
        save: function () {
            localStorage.setItem("weblink_" + epub_code, JSON.stringify(this.links))
        }
    };

function addToc(b, c, a, e, d, f) {
    1 < parseInt(e) && 0 <= f ? $("#collapse" + f).append('<li class="sub_txt" onClick="goPageWithUrl(\'' + b + "')\"><p>" + c + "</p></li>") : d ? $("#menu_contents").append('<li class="menu_sub collapsed" data-toggle="collapse" data-target="#collapse' + a + '" aria-expanded="false" aria-controls="collapse' + a + '"><p>' + c + '</p>   <ul id="collapse' + a + '" class="menu_sub_contents collapse multi-collapse">   </ul></li>') : $("#menu_contents").append("<li onClick=\"goPageWithUrl('" + b + "')\"><p>" + c + "</p></li>")
};