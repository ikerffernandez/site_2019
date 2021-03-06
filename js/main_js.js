﻿var cookies = localStorage.getItem('mensaje');
var visits = Number(localStorage.getItem('visits'));
console.log(visits);


//Increase number of visits

localStorage.setItem('visits', Number(localStorage.getItem('visits')) + 1);



$( document ).ready(function() {
    
    if (visits >= 10) 
    localStorage.clear();

});



//Cookies hidden when mensaje is NO


$( document ).ready(function() {
    
    if (cookies == 'no') 
        $('.cookies').addClass('cookieshidden')


});

$( document ).ready(function() {
    
    if (visits == 10) 
        $('.cookies').addClass('cookieshidden')
        var visits = 0;
});


//Hide cookies when cliking on the x


$('.cookies-close').on('click', function () {
    $('.cookies').addClass('nocookies')
});

$('.cookies-close').on('click', function () {
    $('.cookies img').addClass('noopacity')
});

$('.cookies-close').on('click', function () {
    $('.cookies-close').addClass('noborderleft')
});

$('.cookies-close').on('click', function () {
    localStorage.setItem('mensaje', 'no');
    var cookies = localStorage.getItem('mensaje');
});



//Parallax
var image = document.getElementsByClassName('thumbnail-1');
new simpleParallax(image, {
    orientation: 'up',
    scale: 1.4,
});
   
var image = document.getElementsByClassName('thumbnail-2');
new simpleParallax(image, {
    orientation: 'up',
    scale: 1.4,
});


//Scroll progress

$(document).on('scroll', function () {

    var pixelsFromTop = $(document).scrollTop()

    var documentHeight = $(document).height()
    var windowHeight = $(window).height()

    var difference = documentHeight - windowHeight
    var percentage = 100 * pixelsFromTop / difference

    $('.progress-front').css('width', percentage + '%')

});


//Logo animation

$('.header-left').on('mouseover', function () {
    $('.logo_1').addClass('logo_1-alt')
});
$('.header-left').on('mouseout', function () {
    $('.logo_1').removeClass('logo_1-alt')
});


//Sage


$('.sage').on('mouseover', function () {
    $('.experience-1-year-position').addClass('make-visible')
});

$('.sage').on('mouseout', function () {
    $('.experience-1-year-position').removeClass('make-visible')
});



//Typeform

$('.typeform').on('mouseover', function () {
    $('.experience-2-year-position').addClass('make-visible')
});

$('.typeform').on('mouseout', function () {
    $('.experience-2-year-position').removeClass('make-visible')
});



//Freelance

$('.freelance').on('mouseover', function () {
    $('.experience-3-year-position').addClass('make-visible')
});

$('.freelance').on('mouseout', function () {
    $('.experience-3-year-position').removeClass('make-visible')
});


//Dommo

$('.dommo').on('mouseover', function () {
    $('.experience-4-year-position').addClass('make-visible')
});

$('.dommo').on('mouseout', function () {
    $('.experience-4-year-position').removeClass('make-visible')
});


//Lirici Greci

$('.liricigreci').on('mouseover', function () {
    $('.experience-5-year-position').addClass('make-visible')
});

$('.liricigreci').on('mouseout', function () {
    $('.experience-5-year-position').removeClass('make-visible')
});



//Fullscreen About

$('.header-right, .learn-more, .iker-intro-text, .iker-photo-about, .iker-paragraph, .iker-about-title, .contact-education-experience').on('click', function () {
    $('.fullscreen-about').toggleClass('visible-about')
    $('.cross').toggleClass('cross-alt')
    $('.about-me-content').toggleClass('about-me-content-scroll')
    $('body').toggleClass('stop-scrolling')
    $('.header-center').toggleClass('make-invisible')
});

$('.header-right, .learn-more, .iker-intro-text, .iker-photo-about, .iker-paragraph, .iker-about-title, .contact-education-experience').on('click', function () {
    $('.iker-text-general, .iker-photo-about, .iker-contact-info, .iker-text-long, .contact-education-experience, .note').toggleClass('iker-intro-text-alt')
});



//Close about-me with ESC

$(document).ready(function () {
    $(document).keydown(function(e){

        if(e.keyCode == 27) {
            $('.fullscreen-about').removeClass('visible-about')
            $('.about-me-content').removeClass('about-me-content-scroll')
            $('body').removeClass('stop-scrolling')
            $('.cross').removeClass('cross-alt')
            $('.header-center').removeClass('make-invisible')
            $('.iker-text-general, .iker-photo-about, .iker-contact-info, .iker-text-long, .contact-education-experience, .note').removeClass('iker-intro-text-alt')
        }
    });
})


//Dark theme

$('.header-left').on('click', function () {
    $('html, body, .fullscreen-about, h1').toggleClass('dark-theme-main')
});

$('.header-left').on('click', function () {
    $('header img').toggleClass('inverted-header')
});

$('.header-left').on('click', function () {
    $('.progress-background').toggleClass('progress-background-light')
    $('.progress-front').toggleClass('progress-front-light')
});

$('.header-left').on('click', function () {
    $('.project-title a, .year-position h5, .experience-description, h2, .iker-text-long p, .about-me-text h4, .iker-paragraph p, .contact-info a, .contact-info p, .button a, .about-me a, .contact-education-experience h6, .contact-education-experience h5, .iker-contact-info a').toggleClass('white-text')
});

$('.header-left').on('click', function () {
    $('.button').toggleClass('button-border-white')
});

//Contact links hover effect

$('.instagram-link').on('mouseover', function () {
    $('.insta').addClass('visible-images')
});

$('.instagram-link').on('mouseout', function () {
    $('.insta').removeClass('visible-images')
});

$('.email-link').on('mouseover', function () {
    $('.gif').addClass('visible-images')
});

$('.email-link').on('mouseout', function () {
    $('.gif').removeClass('visible-images')
});

$('.dribbble-link').on('mouseover', function () {
    $('.dribbble').addClass('visible-images')
});

$('.dribbble-link').on('mouseout', function () {
    $('.dribbble').removeClass('visible-images')
});