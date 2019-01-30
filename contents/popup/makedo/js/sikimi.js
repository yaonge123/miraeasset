function setScale() {
    var targetEle = document.getElementById("sikimi");
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var hRatio = windowWidth / targetEle.clientWidth;
    var vRatio = windowHeight / targetEle.clientHeight;

    setTransform(targetEle, hRatio, vRatio);

    function setTransform(targetEle, hRatio, vRatio) {
        targetEle.setAttribute("style", "-ms-transform: scale(" + hRatio + "," + vRatio + ");"
            + "-webkit-transform: scale(" + hRatio + "," + vRatio + ");" + "transform: scale(" + hRatio + "," + vRatio + ");"
            + "transform-origin: 0% 0%; -webkit-transform-origin: 0% 0%; -ms-transform-origin: 0% 0%;");
    }
}

function aniInputArea() {
    var isAni = false;

    $(".inputArea").animate({
        "padding-top": "130px",
        opacity: 1
    }, {
        duration: 1500,
        progress: function (promise, progress, remainingMs) {
            if (progress > 0.7) {
                if(!isAni) {
                    $(".enterBtn").animate({
                        top: "460px",
                        opacity: 1
                    }, 1000);
                }
                isAni = true;
            }
        }
    });
}

function bindEvent() {
    $(".inputBox input").on("keypress", function (e) {
        var keycode = e.which;

        if (keycode < 47 || keycode > 57) {
            return false;
        }
    });

    $(".inputBox input").on("keyup", function () {
        var $this = $(this);
        var inputVal = $this.val();

        if (inputVal > 50) {
            inputVal = "50"
        }

        $this.val(inputVal.replace(/[^0-9]/g, ""));
    });

    $(".enterBtn").on("click", function () {
        var inputNum = +$(".inputBox input").val();
        var i = 1;

        if (inputNum) {
            $(".inputPage").hide();
            $(".resultPage").fadeIn();

            for (; i <= inputNum; i++) {
                $(".randomList").append("<li>" + i + "</li>");
            }

            stopClickAudio();
            $(".soundClick").trigger("play");
        }
    });

    $(".startBtn").on("click", function () {
        var inputNum = +$(".inputBox input").val();
        var $result = $(".result");
        var randomNum = Math.floor(Math.random() * inputNum) + 1;
        
        stopClickAudio();
        $(".soundClick").trigger("play");
        $(".soundEnd").trigger("play");
        stopFeedAudio();

        if ($result.css("display") === "block") {
            $result.hide();
        }
        $(".sunGroup").show();

        $(".sun").animate({
            top: "0px"
        }, {
            duration: 0,
            complete: function() {
                $result.text(randomNum);
                $result.show();

                $result.animate({
                    opacity: 1,
                }, {
                    duration: 1000,
                    progress: function (promise, progress, remainingMs) {
                        $(this).css("transform", "scale(" + progress + ")");
                    }
                });

                $(".sunGroup").fadeOut(function() {
                    $(".sun").css("top", "300px");
                });
                
                $(".randomList li:eq(" + (randomNum - 1) + ")").addClass("on");
                stopFeedAudio();
                $(".soundEnd").trigger("play");
            }
        });
    });

    $(".resetBtn").on("click", function () {
        reset();
        stopClickAudio();
        $(".soundClick").trigger("play");
    });

    // 2019.01.15 왕예나 수정
    $(".closeBtn").on("click", function () {
        // if (window.android !== undefined) return;
        window.close();
        //viewer.link("close", "");
    });
}

function stopClickAudio() {
    $(".soundClick").trigger("pause");
    $(".soundClick").prop("currentTime", 0);
}

function stopFeedAudio() {
    $(".soundEnd").trigger("pause");
    $(".soundEnd").prop("currentTime", 0);
}

function reset() {
    $(".resultPage").hide();
    $(".result").hide();
    $(".result").text("");
    $(".randomList li").remove();
    $(".inputPage").fadeIn();
    $(".inputBox input").val("");
    $(".inputArea").css("padding-top", "65px");

    $(".enterBtn").css({
        top: "400px",
        opacity: 0
    });

    aniInputArea();
}

document.addEventListener("DOMContentLoaded", function () {
    setScale();
    aniInputArea();
    bindEvent();
});

window.addEventListener("resize", setScale, true);