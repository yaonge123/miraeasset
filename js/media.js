        // 미디어플레이어에서 전체화면 호출
        //      style : 미디어플레이어에 설정된 속성값
        //      obj : 관련파라미터
        function callFullscreen(style, obj) {
           // 고정 id로 검색 (fullscreen_roleplay / fullscreen_thumbnail)
           var frame_name = "video_full" + style;
           var target_frame = $("iframe[src $= '" + frame_name + ".html']")[0];
           var target_doc = target_frame.contentWindow || target_frame.contentDocument;
           $(target_frame).css("display", "inline-block"); // 풀스크린 프레임 보이게 함
           target_doc.setMedia("fullscreencustom", obj); // 미디어플레이어 이동 전달 함수 호출            
        }

        // 전체화면 커스텀 프레임에서 돌아가기 호출
        //      received : callFullscreen 으로 넘겨받아둔 관련파라미터
        //              .window : 풀스크린을 요청한 프레임의 window
        //      obj : 관련파라미터
        //              .window : 풀스크린 프레임의 window
        function callNormalscreen(received, obj) {
            var client = tools_getFrameByWindow(obj.window); // obj.window 로 호출한 프레임 검색
            $(client.frm).css("display", "none"); // 풀스크린 프레임 숨김
            var target = tools_getFrameByWindow(received.window); // received.window 로 돌려줄 프레임 검색
            target.doc.setMedia(received.client, obj); // 미디어플레이어 이동 전달 함수 호출
        }

        // 호출한 프레임 제외 다른 프레임의 모든 미디어플레이어 리셋
        //      win : 호출한 프레임의 window
        function resetMediaPlayerExcept(win) {
            var ar = $(document).find("iframe");
            for (var ii = 0 ; ii < ar.length ; ii++) {
                var doc = ar[ii].contentWindow || ar[ii].contentDocument;
                if (doc.window != win && typeof doc.resetAllMediaPlayer!=='undefined') { 
                    doc.resetAllMediaPlayer(true); 
                }
            }
        }

        // 윈도우로 프레임 검색
        function tools_getFrameByWindow(win) {
            var rtn;
            var ar = $(document).find("iframe");
            for (var ii = 0 ; ii < ar.length ; ii++) {
                var frm = ar[ii];
                var doc = frm.contentWindow || frm.contentDocument;
                if (doc.window == win) { rtn = { frm: frm, doc: doc }; }
            }
            return rtn;
        }
