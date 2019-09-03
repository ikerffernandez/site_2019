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

$('.header-right').on('click', function () {
    $('.fullscreen-about').toggleClass('visible-about')
    $('.cross').toggleClass('cross-alt')
    $('.about-me-content').toggleClass('about-me-content-scroll')
});

$('.learn-more').on('click', function () {
    $('.fullscreen-about').addClass('visible-about')
    $('.cross').toggleClass('cross-alt')
    $('.about-me-content').toggleClass('about-me-content-scroll')
});

$('.fullscreen-about').on('click', function () {
    $('.fullscreen-about').toggleClass('visible-about')
    $('.cross').toggleClass('cross-alt')
    $('.about-me-content').toggleClass('about-me-content-scroll')
});