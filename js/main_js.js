//Scroll progress

$(document).on('scroll', function () {

    var pixelsFromTop = $(document).scrollTop()

    var documentHeight = $(document).height()
    var windowHeight = $(window).height()

    var difference = documentHeight - windowHeight
    var percentage = 100 * pixelsFromTop / difference

    $('.progress-front').css('width', percentage + '%')

});


//Cursor

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

$('.header-right, .learn-more, .iker-intro-text, .iker-photo-about, .iker-paragraph, .iker-about-title').on('click', function () {
    $('.fullscreen-about').toggleClass('visible-about')
    $('.cross').toggleClass('cross-alt')
    $('.about-me-content').toggleClass('about-me-content-scroll')
    $('body').toggleClass('stop-scrolling')
    $('.header-center').toggleClass('make-invisible')
});

$('.header-right, .learn-more, .iker-intro-text, .iker-photo-about, .iker-paragraph, .iker-about-title').on('click', function () {
    $('.iker-text-general, .iker-photo-about, .iker-contact-info').toggleClass('iker-intro-text-alt')
});



//Close about-me with ESC

$(document).ready(function () {
    $(document).keydown(function(e){

        if(e.keyCode == 27) {
            $('.fullscreen-about').removeClass('visible-about')
            $('.about-me-content').removeClass('about-me-content-scroll')
            $('body').removeClass('stop-scrolling')
            $('.cross').removeClass('cross-alt')
        }
    });
})


//Dark theme

$('.header-left').on('click', function () {
    $('html, body, .fullscreen-about').toggleClass('dark-theme-main')
});

$('.header-left').on('click', function () {
    $('header img').toggleClass('inverted-header')
});

$('.header-left').on('click', function () {
    $('.progress-background').toggleClass('progress-background-light')
    $('.progress-front').toggleClass('progress-front-light')
});

$('.header-left').on('click', function () {
    $('.project-title a, .year-position h5, .experience-description, h2, h4, .iker-paragraph p, .contact-info a, .contact-info p, .button a, .about-me a').toggleClass('white-text')
});

$('.header-left').on('click', function () {
    $('.circle').toggleClass('circle-white')
});

$('.header-left').on('click', function () {
    $('.iker-contact-info').toggleClass('iker-contact-info-alt')
});

$('.header-left').on('click', function () {
    $('.button').toggleClass('button-border-white')
});
