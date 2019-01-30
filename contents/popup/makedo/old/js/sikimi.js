$(function(){var inputNum;setTimeout(function(){$('.balloon').fadeIn()},2200);$('.inputBox input').keypress(function(event){if(event.which&&(event.which<=47||event.which>=58)&&event.which!=8){event.preventDefault();return false}});$('.inputBox input').keyup(function(){if($(this).val()>50)$(this).val('50');if($(this).val()==0)$(this).val('');if(!(event.keyCode>=37&&event.keyCode<=40)){var inputVal=$(this).val();$(this).val(inputVal.replace(/[^a-z0-9]/gi,''))}});$('.enterBtn').click(function(e){e.preventDefault();inputNum=$('.inputBox input').val();if(inputNum==""||inputNum>50)return false;$('.inputPage').hide();$('.balloon').fadeOut();$('.resultPage').fadeIn();for(var i=1;i<=inputNum;i++){$('.randomList').append('<li>'+i+'</li>')}audioStop();$(".soundClick").trigger("play")});$('.startBtn').click(function(e){e.preventDefault();$('.sunGroup').show();$('.result').hide();$('.result').text(randomNum(1,inputNum));setTimeout(function(){$('.result').show();$('.sunGroup').fadeOut();$(".randomList li:eq("+($('.result').text()-1)+")").addClass("on");audioStop();$(".soundEnd").trigger("play")},2200);audioStop();$(".soundClick").trigger("play")});$('.resetBtn').click(function(e){e.preventDefault();init();audioStop();$(".soundClick").trigger("play")});$('.homeBtn').click(function(e){e.preventDefault();if($('.resultPage').css('display')=='block')init()});function init(){$('.resultPage').hide();$('.sunGroup').hide();$('.result').hide();$('.inputPage').fadeIn();$('.randomList li').remove();$('.result').text('');$('.inputBox input').val('');setTimeout(function(){$('.balloon').fadeIn()},2200);inputNum=undefined;start=false}function randomNum(min,max){var random;var result;do{random=Math.floor(Math.random()*(max-min+1))+min;result=false;$(".randomList li.on").each(function(){if($(this).text()==random){result=true;return false}})}while(result&&$(".randomList li.on").length<$(".inputBox input").val());return random}function audioStop(){$(".soundClick").trigger("pause");$(".soundClick").prop("currentTime",0);$(".soundEnd").trigger("pause");$(".soundEnd").prop("currentTime",0)}});function setScale(){console.log('call setScale');var targetEle=document.getElementById('sikimi');var windowWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var windowHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;hRatio=windowWidth/targetEle.clientWidth;vRatio=windowHeight/targetEle.clientHeight;setTransform(targetEle,hRatio,vRatio);function setTransform(targetEle,hRatio,vRatio){targetEle.setAttribute('style','-ms-transform: scale('+hRatio+','+vRatio+');'+'-webkit-transform: scale('+hRatio+','+vRatio+');'+'transform: scale('+hRatio+','+vRatio+');'+'transform-origin: 0% 0%; -webkit-transform-origin: 0% 0%; -ms-transform-origin: 0% 0%;')}}