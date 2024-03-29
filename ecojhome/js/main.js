

$('.about__buttons-item2 ').on('click', function (e) {
    e.preventDefault()
    $('.about__rightside-descr--item2').addClass('about__rightside-descr--item---active2')
    $('.about__rightside-descr--item').removeClass('about__rightside-descr--item---active1')
    $('.about__rightside-descr--item3').removeClass('about__rightside-descr--item---active3')
    $(this).addClass('about__buttons-item--active')
    $('.about__buttons-item3 ').removeClass('about__buttons-item--inactive')
    $('.about__buttons-item1').removeClass('about__buttons-item--inactive')
    $('.about__buttons-item3').removeClass('about__buttons-item--active')
    $('.about__buttons-item1 ').removeClass('about__buttons-item--active')
    $(this).removeClass('about__buttons-item--inactive')
});

$('.about__buttons-item1 ').on('click', function (e) {
    e.preventDefault()
    $(this).addClass('about__buttons-item--active')
    $('.about__buttons-item3 ').addClass('about__buttons-item--inactive')
    $('.about__buttons-item2 ').removeClass('about__buttons-item--inactive')
    $('.about__buttons-item2 ').removeClass('about__buttons-item--active')
    $('.about__buttons-item3 ').removeClass('about__buttons-item--active')
    $('.about__rightside-descr--item').addClass('about__rightside-descr--item---active1')
    $('.about__rightside-descr--item2').removeClass('about__rightside-descr--item---active2')
    $('.about__rightside-descr--item3').removeClass('about__rightside-descr--item---active3')
    $(this).removeClass('about__buttons-item--inactive')
});

$('.about__buttons-item3 ').on('click', function (e) {
    e.preventDefault()
    $('.about__rightside-descr--item---3').addClass('about__rightside-descr--item---active3')
    $('.about__rightside-descr--item').removeClass('about__rightside-descr--item---active1')
    $('.about__rightside-descr--item2').removeClass('about__rightside-descr--item---active2')
    $('.about__buttons-item2 ').removeClass('about__buttons-item--inactive')
    $('.about__buttons-item1').addClass('about__buttons-item--inactive')
    $('.about__buttons-item2').removeClass('about__buttons-item--active')
    $('.about__buttons-item1 ').removeClass('about__buttons-item--active')
    $(this).addClass('about__buttons-item--active')
    $(this).removeClass('about__buttons-item--inactive')
});





$('.choice__button').click(function () {
    var id = $(this).attr('num-tab'),
        content = $('.choice__content-item[num-tab="' + id + '"]');

    $('.choice__button.choice__button-active').removeClass('choice__button-active'); // 1
    $(this).addClass('choice__button-active'); // 2

    $('.choice__content-item.choice__content-item--active').removeClass('choice__content-item--active'); // 3
    content.addClass('choice__content-item--active'); // 4
});

$('.step__btn').click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.step__pic[data-tab="' + id + '"]');

    $('.step__btn.step__btn-active').removeClass('step__btn-active'); // 1
    $(this).addClass('step__btn-active'); // 2

    $('.step__pic.step__pics-active').removeClass('step__pics-active'); // 3
    content.addClass('step__pics-active'); // 4
    if (id > 1) {
        $('.step__buttons').addClass('step__buttons-active');
        $('.step__content').addClass('step__content-active');
        $('.step__buttons').removeClass('step__buttons-unactive');
    } else {
        $('.step__buttons').removeClass('step__buttons-active');
        $('.step__content').removeClass('step__content-active');
        $('.step__buttons').addClass('step__buttons-unactive');
    }
});

$(function win() {
    if ($(window).width() < 1170) {
        $('.step__buttons').addClass('step__buttons-active');
        $('.step__content').addClass('step__content-active');
        $('.step__buttons').css({ 'animation-name': "none" });
        $('.step__buttons').css({ 'flex-direction': "row" });
        $('.step__content').css({ 'flex-direction': "column" });
        $('.step__butons--unactive').css({ 'flex-direction': "row" });
    }
    setInterval(win, 100);
});

$('.footer__about-item--main').click(function (e) {
    e.preventDefault()
    $('.footer__about-item').slideToggle();
});
