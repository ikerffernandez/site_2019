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