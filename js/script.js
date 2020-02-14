

/*
audio play
*/

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function runAlarmScript() {
    var x = document.getElementById("myAudio");
    var audioHour = document.getElementById("hour-music").value;
    var audioMinute = document.getElementById("minute-music").value;

    var now = new Date();
    var hr = now.getHours();
    var minutes = now.getMinutes();
    var sec = now.getSeconds();

    function moveThoseArms() {
        now = new Date();

        hr = now.getHours();
        minutes = now.getMinutes();
        sec = now.getSeconds();

        console.log(hr, minutes, sec);


        var deltaHr = hr * 360 / 12 + ((minutes * 360 / 60) / 12); // 0.0016   // 360/60/60/60
        var deltaMin = (minutes * 360 / 60) + (sec * 360 / 60) / 60; // 0.1    // 360/60/60 
        var deltaSec = sec * (360 / 60); // 6                                    // 360/60

        var HOURHAND = document.querySelector('#hour');
        var MINUTEHAND = document.querySelector('#minute');
        var SECONDHAND = document.querySelector('#second');

        HOURHAND.style.transform = "rotate(" + deltaHr + "deg)";
        MINUTEHAND.style.transform = "rotate(" + deltaMin + "deg)";
        SECONDHAND.style.transform = "rotate(" + deltaSec + "deg)";

        audioHour = document.getElementById("hour-music").value;
        audioMinute = document.getElementById("minute-music").value;
        playAudio(); // execute function
    }

    setInterval(moveThoseArms, 1000);

    function playAudio() {
        if (audioHour == hr && audioMinute == minutes) {
            x.play();
        } else (console.log('its not time yet'));
    }

    function pauseAudio() {
        x.pause();
    }
}

ready(runAlarmScript);


