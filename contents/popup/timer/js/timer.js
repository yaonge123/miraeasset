/*
JQUERY: STOPWATCH & COUNTDOWN
This is a basic stopwatch & countdown plugin to run with jquery. Start timer, pause it, stop it or reset it. Same behaviour with the countdown besides you need to input the countdown value in seconds first. At the end of the countdown a callback function is invoked.
Any questions, suggestions? marc.fuehnen(at)gmail.com
*/

$(document).ready(function() {
    (function($) {
        $.extend({

            APP: {

                formatTimer: function(a) {
                    if (a < 10) {
                        a = '0' + a;
                    }
                    return a;
                },

                startTimer: function(dir) {

                    var a;

                    // save type
                    $.APP.dir = dir;

                    // get current date
                    $.APP.d1 = new Date();

                    switch ($.APP.state) {

                        case 'pause':

                            // resume timer
                            // get current timestamp (for calculations) and
                            // substract time difference between pause and now
                            $.APP.t1 = $.APP.d1.getTime() - $.APP.td;
                            break;

                        default:

                            // get current timestamp (for calculations)
                            $.APP.t1 = $.APP.d1.getTime();

                            // if countdown add ms based on seconds in textfield
                            if ($.APP.dir === 'cd') {
                                $.APP.t1 += parseInt($('#cd_seconds').val()) * 1000;
                            }

                            break;

                    }

                    // reset state
                    $.APP.state = 'alive';
                    $('#' + $.APP.dir + '_status').html('Running');

                    // start loop
                    $.APP.loopTimer();

                },

                pauseTimer: function() {
                    // save timestamp of pause
                    $.APP.dp = new Date();
                    $.APP.tp = $.APP.dp.getTime();

                    // save elapsed time (until pause)
                    // $.APP.td = $.APP.tp - $.APP.t1;
                    $.APP.td = $.APP.tp - $.APP.t1;

                    // change button value
                    $('#' + $.APP.dir + '_start').val('Resume');
                    // set state
                    $.APP.state = 'pause';
                    $('#' + $.APP.dir + '_status').html('Paused');
                },

                stopTimer: function() {

                    // change button value
                    $('#' + $.APP.dir + '_start').val('Restart');

                    // set state
                    $.APP.state = 'stop';
                    $('#' + $.APP.dir + '_status').html('Stopped');

                },

                resetTimer: function() {
                    // reset display
                    $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');

                    // change button value
                    $('#' + $.APP.dir + '_start').val('Start');

                    // set state
                    $.APP.state = 'reset';
                    $('#' + $.APP.dir + '_status').html('Reset & Idle again');
                },

                endTimer: function(callback) {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Restart');

                    // set state
                    $.APP.state = 'end';

                    // invoke callback
                    if (typeof callback === 'function') {
                        callback();
                    }
                },

                loopTimer: function() {

                    var td;
                    var d2, t2;

                    var ms = 0;
                    var s = 0;
                    var m = 0;
                    var h = 0;

                    if ($.APP.state === 'alive') {

                        // get current date and convert it into
                        // timestamp for calculations
                        d2 = new Date();
                        t2 = d2.getTime();

                        // calculate time difference between
                        // initial and current timestamp
                        if ($.APP.dir === 'sw') {
                            td = t2 - $.APP.t1;
                            // reversed if countdown
                        } else {
                            td = $.APP.t1 - t2;
                            if (td <= 0) {
                                // if time difference is 0 end countdown
                                $.APP.endTimer(function() {
                                    $.APP.resetTimer();
                                    $('#' + $.APP.dir + '_status').html('Ended & Reset');
                                    btnCd("start");
                                    audioStop();
                                    $(".soundEnd").trigger("play");
                                });
                            }
                        }

                        // calculate milliseconds
                        ms = td % 1000;
                        if (ms < 1) {
                            ms = 0;
                        } 
                        // calculate seconds
                        s = (td - ms) / 1000;
                        if (s < 1) {
                            s = 0;
                        }
                        // calculate minutes
                        var m = (s - (s % 60)) / 60;
                        if (m < 1) {
                            m = 0;
                        }
                        // calculate hours
                        var h = (m - (m % 60)) / 60;
                        if (h < 1) {
                            h = 0;
                        }

                        // substract elapsed inutes & hours
                        ms = Math.round(ms / 10);
                        if (ms > 99) ms = 99;
                        s = s - (m * 60);
                        m = m - (h * 60);

                        if($('#' + $.APP.dir + '_s').html()!=$.APP.formatTimer(s)){
                        	audioStop();
                            $(".soundSeconds").trigger("play");
                        }
                        
                        // update display
                        $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                        $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                        $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));

                        // loop
                        $.APP.t = setTimeout($.APP.loopTimer, 1);

                    } else {

                        // kill loop
                        clearTimeout($.APP.t);
                        return true;

                    }

                }

            }

        });
        
        $("#timer_con > #choice > button").click(function(){
        	btnSw("start");
        	btnCd("start");
        	$.APP.resetTimer();
        	
        	$("#timer_con > #timer > #timeSelect > .selectBox > button").removeClass("on");
        	$("#cd_m, #cd_s").html("00");
        	
        	$("#timer_con > #choice > button").removeClass("on");
        	$(this).addClass("on");
        	
        	$("#timer_con > #timer, #timer_con > #stopWatch").css("display", "none");
        	if($(this).attr("id")=="cd_timer") $("#timer_con > #timer").css("display", "inline-block");
        	else $("#timer_con > #stopWatch").css("display", "inline-block");
        	audioStop();
            $(".soundClick").trigger("play");
        });
        
        $("#timer_con > #timer > #timeSelect > .selectBox > button").click(function(){
        	btnCd("start");
        	$.APP.stopTimer('sw');
        	
        	$("#timer_con > #timer > #timeSelect > .selectBox > button").removeClass("on");
        	$(this).addClass("on");
        	
        	var time = $(this).val();
        	$("#cd_m").html($.APP.formatTimer(time));
        	$("#cd_s").html("00");
        	$("#cd_seconds").val(time*60);
        	audioStop();
            $(".soundClick").trigger("play");
        });

        $('#sw_start').on('click', function() {
        	btnSw("stop");
        	$.APP.startTimer('sw');
        	audioStop();
            $(".soundClick").trigger("play");
        });

        $('#sw_stop').on('click', function() {
        	btnSw("start");
        	$.APP.pauseTimer('sw');
        	audioStop();
            $(".soundClick").trigger("play");
        });
        
        $('#sw_reset').on('click', function() {
        	btnSw("start");
        	$.APP.resetTimer('sw');
        	audioStop();
            $(".soundClick").trigger("play");
        });
        
        $('#cd_start').on('click', function() {
        	if($("#timer_con > #timer > #timeSelect > .selectBox > button.on").length!=0){
        		btnCd("stop");
        		$.APP.startTimer('cd');
        	}
        	audioStop();
            $(".soundClick").trigger("play");
        });

        $('#cd_stop').on('click', function() {
        	btnCd("start");
        	$.APP.pauseTimer('cd');
        	audioStop();
            $(".soundClick").trigger("play");
        });
        
        $('#cd_reset').on('click', function() {
        	btnCd("start");
        	$.APP.resetTimer('cd');
        	
        	var time = $("#timer_con > #timer > #timeSelect > .selectBox > button.on").val();
        	$("#cd_m").html($.APP.formatTimer(time));
            audioStop();
            $(".soundClick").trigger("play");
        });
        
        function btnSw(op){
        	$("#sw_start, #sw_stop").css("display", "none");
        	if(op=="start") $("#sw_start").css("display", "inline-block");
        	else $("#sw_stop").css("display", "inline-block");
        }
        
        function btnCd(op){
        	$("#cd_start, #cd_stop").css("display", "none");
        	if(op=="start") 		$("#cd_start").css("display", "inline-block");
        	else if(op=="stop") 	$("#cd_stop").css("display", "inline-block");
        }
        
        // all audio stop
        function audioStop(){
        	$(".soundClick").trigger("pause");
        	$(".soundClick").prop("currentTime", 0);
        	$(".soundEnd").trigger("pause");
        	$(".soundEnd").prop("currentTime", 0);
        }
        
    })(jQuery);
 
});
