﻿//Cursor

jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});


//Dark Theme

$('.header-left').on('click', function () {
    $('body').toggleClass('dark-theme-general')
    $('.circle').toggleClass('light-circle')
    $('a').toggleClass('white-links')
    $('h4').toggleClass('white-links')
    $('.fullscreen-about').toggleClass('dark-theme-general')
    $('.about-me-content').toggleClass('dark-theme-general')
    $('.about-me a:hover').toggleClass('white-links')
    $('.contact-info p').toggleClass('white-links')
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


//Logo rotate

$('.header-left').on('mouseover', function () {
    $('.logo-1').addClass('logo-1-rotate')
});
$('.header-left').on('mouseout', function () {
    $('.logo-1').removeClass('logo-1-rotate')
});



//Fullscreen About

$('.header-right').on('click', function () {
    $('.fullscreen-about').toggleClass('visible-about')
    $('.cross').toggleClass('cross-alt')
    $('.header-left').toggleClass('opacity_0')
    $('.about-me-content').toggleClass('about-me-content-scroll')
});

$('.learn-more').on('click', function () {
    $('.fullscreen-about').addClass('visible-about')
    $('.cross').toggleClass('cross-alt')
    $('.header-left').toggleClass('opacity_0')
    $('.about-me-content').toggleClass('about-me-content-scroll')
});

$('.fullscreen-about').on('click', function () {
    $('.fullscreen-about').toggleClass('visible-about')
    $('.cross').toggleClass('cross-alt')
    $('.header-left').toggleClass('opacity_0')
    $('.about-me-content').toggleClass('about-me-content-scroll')
});