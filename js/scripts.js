//button
jQuery(document).ready(function () {
    var btn = $('#button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /**
    * A recursive function that fades the page logo to 10% visibility and back to 100%
    */
    //function animationComplete(){$('branding').fadeTo(300, 0.1).fadeTo(300, 1, animationComplete);}
    // animationComplete();

});

//blink logo
$(document).ready(function () {
    $('.branding')
        .fadeTo("slow", 0.1)
        .fadeTo("slow", 1)
        .fadeTo("slow", 0.1)
        .fadeTo("slow", 1)
        .fadeTo("slow", 0.1)
        .fadeTo("slow", 1)
});

//mineralwater background color to green

$(document).ready(function () {
    $('[data-type="mineralwater"]').css("background-color", "green");
});

//proteinbar product name background to blue
$(document).ready(function () {
    $('[data-type="proteinbar"]').css("background-color", "blue");
})

// print
$(function () {
    $('.print').click(function () {
        window.print();
    });
});

//first word of the person-card's card text is to be bold

$(document).ready(function () {
    var all = $(".card-text");
    for (var i = 0; i < all.length; i++) {
        var html = $(all[i]).html();
        var firstWord = html.split(" ")[0];
        var boldFirstWord = "<b>" + firstWord + "</b>";
        var newhtml = html.replace(firstWord, boldFirstWord);
        $(all[i]).html(newhtml);
    }
});



//$('.card-text').each(function () {
//var word = $(this).html();
//var index = word.indexOf(' ');
//if (index == -1) {
//index = word.length;
//}
//$(this).html('<span style="font-weight: bold">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
//});

// move Michael Lewiston to the first in the list
$(function () {
    $('.person-card').eq(5).insertBefore($('.person-card').eq(0));
});

// change people headline & nav to green

$(document).ready(function () {

    $('.navbar li a').eq(4).text("personnel");
});

$(document).ready(function () {
    $('.footer li a').eq(4).text("personnel");
});


$(document).ready(function () {
    $('#people .headline').text("Personnel");
});

// ajax 
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=helsinki&units=metric&APPID=8d204926debc934e6e308366d1ca83e2"
}).done(function (resp) {
    //console.log('this is the value of resp: ');
    //console.log(resp);
    $('.api-top-btn').text(resp.name
        + ' today is '
        + resp.main.temp
        + ' and it feels like '
        + resp.main.feels_like);
});

