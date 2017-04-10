// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 200) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

//$(function() {
//  $("#pointer").effect("bounce", { times:3}, distance:200 }, 300 );
//});

//$(window).on('load', function() {
//    $('#pointer').effect("bounce", {
//        times: 4,
//        distance: 200
//    }, 400).click(function() {
//        $(this).effect("bounce", {
//            times: 4,
//            distance: 200
//        }, 400);
//    });
//})

$(function(){
    $("#pointer").effect("bounce", { times:3 }, 300);
})
