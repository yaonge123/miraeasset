function setScale() {
    var targetEle = document.getElementById("helper");
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

function getHandler() {
    var $imgList = $(".imgbox li");
    var imgLen = $imgList.length;
    var breakPoint, changeOpacity;

    function off() {
        breakPoint = imgLen - 1;

        changeOpacity = setInterval(function () {
            // console.log('off', breakPoint);
            if (breakPoint) {
                $(".imgbox li:eq(" + breakPoint + ")").css({
                    "opacity": 0
                });
                breakPoint--;
            } else {
                clearInterval(changeOpacity);
            }
        }, 50);
    }

    return {
        on: function () {
            if (!breakPoint) {
                breakPoint = 1;
            }

            if (changeOpacity) {
                clearInterval(changeOpacity);
            }

            changeOpacity = setInterval(function () {
                // console.log('on', breakPoint);
                if (imgLen !== breakPoint) {
                    $(".imgbox li:eq(" + breakPoint + ")").css({
                        "opacity": 1
                    });
                    breakPoint++;
                } else {
                    clearInterval(changeOpacity);
                    off();
                }
            }, 50);
        }
    }
}

function playSound() {
    var audioEle = document.querySelector('.soundEnd');

    audioEle.pause();
    audioEle.currentTime = 0;
    audioEle.play();
}

document.addEventListener("DOMContentLoaded", function () {
    var bulb = getHandler();

    setScale();

    $(".imgbox").on("click", function () {
        bulb.on();
        playSound();
    });

    //2019.01.15 왕예나 수정
    $(".closeBtn").on("click", function () {
        // if (window.android !== undefined) return;
        // else window.close();
        window.close();
    });
});

window.addEventListener("resize", setScale, true);