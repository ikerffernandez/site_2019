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



//Fullscreen Menu

$('.header-right').on('click', function () {
    $('.fullscreen-menu').toggleClass('visible-menu')
    $('.cross').toggleClass('cross-alt')
});

$('.learn-more').on('click', function () {
    $('.fullscreen-menu').addClass('visible-menu')
    $('.cross').toggleClass('cross-alt')
});

$('.fullscreen-menu').on('click', function () {
    $('.fullscreen-menu').toggleClass('visible-menu')
    $('.cross').toggleClass('cross-alt')
});