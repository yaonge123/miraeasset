//
// 이름순 정렬 JSON
function loadBookListOrderByTitle() {
    $.getJSON("/restapi/booklistOrderByTitle", {}).done(function(book) {
        $("#book_list").empty();
        $("#popup_list").empty();
        for (var inc = 0; inc < book.length; inc++) {
            $("#book_list").append(
                '<li class="book_info"><div class="thumb"><img src=' + book[inc].rscUrl + '></div><div id="btn_wrap' + book[inc].idx + '" class="btn_wrap" onclick="javascript:window.open(\'/index.php/viewer/fixed/' + book[inc].seq + '/orange/pd/\');"><div class="btn_download" data-state="true"></div><div id="btn_detail" onclick="javascript: showBookDetail(' + book[inc].idx + ')" class="btn_guide"></div></div><div class="download_wrap"><div class="download_bar"><div class="bar"></div></div></div><p class="book_title">' + book[inc].title + '</p></li>'
            );
            $("#popup_list").append(
                '<div id="book_intro' + book[inc].idx + '" class="popup_contents p_book_introduction" style="display:none"><div class="container"><div class="inner_pop_title"><p class="tt">책 소개</p><div class="pop_close_btn" onclick="javascript:closeBookDetail(' + book[inc].idx + ')" title="닫기">닫기</div></div><div class="inner_pop_detail"><div class="book_info"><div class="thumb"><img src="' + book[inc].rscUrl + '"/></div><div class="btn_wrap"></div><p class="book_title">' + book[inc].title + '</p><ol class="book_redit"><li>' + book[inc].desc.replace(/(\n|\r\n)/g, '<br>') + '</li></ol><p class="book_detail"></p></div></div><div class="btn_wrap"><div class="btn_download" title="다운로드" data-state="true">다운로드</div><div class="btn_view" onclick="javascript:window.open(\'/index.php/viewer/fixed/' + book[inc].seq + '/orange/pd/\');closeBookDetail(' + book[inc].idx + ');" title="책보기">책보기</div></div></div></div>'
            );
        }
    }).fail(function(book, a, c) {
        console.log("Request Failed: " + (a + ", " + c));
    });
}
//
// 입력일자 기준 정렬 JSON
function loadBookListOrderByRegdate() {
    $.getJSON("/restapi/booklistOrderByRegdate", {}).done(function(book) {
        $("#book_list").empty();
        $("#popup_list").empty();
        for (var inc = 0; inc < book.length; inc++) {
            $("#book_list").append(
                '<li class="book_info"><div class="thumb"><img src=' + book[inc].rscUrl + '></div><div id="btn_wrap' + book[inc].idx + '" class="btn_wrap" onclick="javascript:window.open(\'/index.php/viewer/fixed/' + book[inc].seq + '/orange/pd/\');"><div class="btn_download" data-state="true"></div><div id="btn_detail" onclick="javascript:showBookDetail(' + book[inc].idx + ')" class="btn_guide"></div></div><div class="download_wrap"><div class="download_bar"><div class="bar"></div></div></div><p class="book_title">' + book[inc].title + '</p></li>'
            );
            $("#popup_list").append(
                '<div id="book_intro' + book[inc].idx + '" class="popup_contents p_book_introduction" style="display:none"><div class="container"><div class="inner_pop_title"><p class="tt">책 소개</p><div class="pop_close_btn" onclick="javascript:closeBookDetail(' + book[inc].idx + ')" title="닫기">닫기</div></div><div class="inner_pop_detail"><div class="book_info"><div class="thumb"><img src="' + book[inc].rscUrl + '"/></div><div class="btn_wrap"></div><p class="book_title">' + book[inc].title + '</p><ol class="book_redit"><li>' + book[inc].desc.replace(/(\n|\r\n)/g, '<br>') + '</li></ol><p class="book_detail"></p></div></div><div class="btn_wrap"><div class="btn_download" title="다운로드" data-state="true">다운로드</div><div class="btn_view" onclick="javascript:window.open(\'/index.php/viewer/fixed/' + book[inc].seq + '/orange/pd/\');closeBookDetail(' + book[inc].idx + ');" title="책보기">책보기</div></div></div></div>'
            );
        }
    }).fail(function(book, a, c) {
        console.log("Request Failed: " + (a + ", " + c));
    });
}

function showBookDetail(idx) {
    window.event.stopPropagation();
    $('#book_intro' + idx).css("display", "inline-block");
}

function closeBookDetail(idx) {
    $('#book_intro' + idx).css("display", "none");
}

function showSelectBox() {
    if ($('#inner_select').hasClass("on")) {
        $('#inner_select').css("display", "none");
        $('#inner_select').removeClass("on");
    } else {
        $('#inner_select').css("display", "inline-block");
        $('#inner_select').addClass("on");
    }
}

$(".inner_select li").on("click", function() {
    $(".select_btn .tt").text($(this).text());
    $(".inner_select").css("display", "none");
    $(".inner_select").removeClass("on");
});

// 수정 필요
function choiceSelectValue(sorting) {
    if (sorting == 'N') {
        loadBookListOrderByTitle();
    } else if (sorting == 'D') {
        loadBookListOrderByRegdate();
    }
}