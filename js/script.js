

function moveThoseArms() {
    var now = new Date();

    var hr = now.getHours();
    var minutes = now.getMinutes();
    var sec = now.getSeconds();
    //var tick = 360 / 60;

    console.log(hr, minutes, sec);


    var deltaHr = hr * 360 / 12 + ((minutes * 360 / 60) / 12); // 0.0016   // 360/60/60/60
    var deltaMin = (minutes * 360 / 60) + (sec * 360 / 60) / 60; // 0.1    // 360/60/60 
    var deltaSec = sec * (360 / 60); // 6                                    // 360/60

    var HOURHAND = document.querySelector('#hour');
    var MINUTEHAND = document.querySelector('#minute');
    var SECONDHAND = document.querySelector('#second');


    //secondArmPosition += tick; // second arm moves extra 6/60 deg every sec
    //minuteArmPosition += tick / 60; // minute arm moves extra 6/60 deg every sec
    //hourArmPosition += tick / 60 / 60; // hour arm moves extra 6/60 deg every sec

    HOURHAND.style.transform = "rotate(" + deltaHr + "deg)";
    MINUTEHAND.style.transform = "rotate(" + deltaMin + "deg)";
    SECONDHAND.style.transform = "rotate(" + deltaSec + "deg)";

}

var interval = setInterval(moveThoseArms, 1000);

/*
setInterval(function () {
    deltaSec += 6;
    deltaMin = deltaSec / 60;
    deltaHr = deltaMin / 60;

    HOURHAND.style.transform = "rotate(" + deltaHr + "deg)";
    MINUTEHAND.style.transform = "rotate(" + deltaMin + "deg)";
    SECONDHAND.style.transform = "rotate(" + deltaSec + "deg)";
}, 1000);
*/