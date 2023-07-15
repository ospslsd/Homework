
$('.about__buttons-item2 ').on('click', function (e) {
    e.preventDefault()
    $('.about__rightside-descr').addClass('about__rightside-descr--item---active1')
    $('.about__rightside-descr').removeClass('about__rightside-descr--item---active2')
    $('.about__rightside-descr').removeClass('about__rightside-descr--item---active')
    $(this).addClass('about__buttons-item--active')
    $('.about__buttons-item3 ').removeClass('about__buttons-item--inactive')
    $('.about__buttons-item1').removeClass('about__buttons-item--inactive')
    $('.about__buttons-item3').removeClass('about__buttons-item--active')
    $('.about__buttons-item1 ').removeClass('about__buttons-item--active')
    $(this).removeClass('about__buttons-item--inactive')
})
$('.about__buttons-item1 ').on('click', function (e) {
    e.preventDefault()
    $(this).addClass('about__buttons-item--active')
    $('.about__buttons-item3 ').addClass('about__buttons-item--inactive')
    $('.about__buttons-item2 ').removeClass('about__buttons-item--inactive')
    $('.about__buttons-item2 ').removeClass('about__buttons-item--active')
    $('.about__buttons-item3 ').removeClass('about__buttons-item--active')
    $('.about__rightside-descr').addClass('about__rightside-descr--item---active')
    $('.about__rightside-descr').removeClass('about__rightside-descr--item---active1')
    $('.about__rightside-descr').removeClass('about__rightside-descr--item---active2')
    $(this).removeClass('about__buttons-item--inactive')
})
$('.about__buttons-item3 ').on('click', function (e) {
    e.preventDefault()
    $('.about__rightside-descr').addClass('about__rightside-descr--item---active2')
    $('.about__rightside-descr').removeClass('about__rightside-descr--item---active1')
    $('.about__rightside-descr').removeClass('about__rightside-descr--item---active')
    $('.about__buttons-item2 ').removeClass('about__buttons-item--inactive')
    $('.about__buttons-item1').addClass('about__buttons-item--inactive')
    $('.about__buttons-item2').removeClass('about__buttons-item--active')
    $('.about__buttons-item1 ').removeClass('about__buttons-item--active')
    $(this).addClass('about__buttons-item--active')
    $(this).removeClass('about__buttons-item--inactive')
})
$('.project__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true
});

$('.houses__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    arrows:true,
    draggable:false,
    autoplay:true
});

$('.houses__btn-next').on('click', function (e) {
    e.preventDefault()
    $('.houses__list').slick('slickNext')
})
$('.houses__btn-prev').on('click', function (e) {
    e.preventDefault()
    $('.houses__list').slick('slickPrev')
})
$('.choice__button--1 ').on('click', function (e) {
    e.preventDefault()
    $('.choice__button--2').removeClass('choice__button-active')
    $('.choice__button--3').removeClass('choice__button-active')
    $('.choice__content-item').addClass('choice__content-item--active1')
    $('.choice__content-item ').removeClass('choice__content-item--active2')
    $('.choice__content-item').removeClass('choice__content-item--active3') 
    $(this).addClass('choice__button-active')
})
$('.choice__button--2 ').on('click', function (e) {
    e.preventDefault()
    $('.choice__button--1').removeClass('choice__button-active')
    $('.choice__button--3').removeClass('choice__button-active')
    $('.choice__content-item').addClass('choice__content-item--active2')
    $('.choice__content-item ').removeClass('choice__content-item--active1')
    $('.choice__content-item').removeClass('choice__content-item--active3') 
    $(this).addClass('choice__button-active')
})
$('.choice__button--3 ').on('click', function (e) {
    e.preventDefault()
    $('.choice__button--2').removeClass('choice__button-active')
    $('.choice__button--1').removeClass('choice__button-active')
    $('.choice__content-item').addClass('choice__content-item--active3')
    $('.choice__content-item ').removeClass('choice__content-item--active1')
    $('.choice__content-item').removeClass('choice__content-item--active2') 
    $(this).addClass('choice__button-active')
})


$('.step__btn1').on('click', function (e) {
    e.preventDefault()

    $('.step__content ').removeClass('step__content-active')
    $('.step__buttons').removeClass('step__buttons-active')
    $('.step__buttons').addClass('step__buttons-unactive')
    $('.step__btn2').removeClass('step__btn-active')
    $('.step__btn3').removeClass('step__btn-active')
    $('.step__btn4').removeClass('step__btn-active') 
    $('.step__btn5').removeClass('step__btn-active') 
    $('.step__pics').removeClass('step__pics-active2') 
    $('.step__pics').addClass('step__pics-active1') 
    $('.step__pics').removeClass('step__pics-active3') 
    $('.step__pics').removeClass('step__pics-active4') 
    $('.step__pics').removeClass('step__pics-active5')
    $(this).addClass('step__btn-active')
})
$('.step__btn2').on('click', function (e) {
    e.preventDefault()
    $('.step__content ').addClass('step__content-active')
    $('.step__buttons').addClass('step__buttons-active')
    $('.step__buttons').removeClass('step__buttons-unactive')
    $('.step__btn1').removeClass('step__btn-active')
    $('.step__btn3').removeClass('step__btn-active')
    $('.step__btn4').removeClass('step__btn-active') 
    $('.step__btn5').removeClass('step__btn-active') 
    $('.step__pics').addClass('step__pics-active2') 
    $('.step__pics').removeClass('step__pics-active1') 
    $('.step__pics').removeClass('step__pics-active3') 
    $('.step__pics').removeClass('step__pics-active4') 
    $('.step__pics').removeClass('step__pics-active5') 
    $(this).addClass('step__btn-active')
})
$('.step__btn3').on('click', function (e) {
    e.preventDefault()
    $('.step__content ').addClass('step__content-active')
    $('.step__buttons').addClass('step__buttons-active')
    $('.step__buttons').removeClass('step__buttons-unactive')
    $('.step__btn2').removeClass('step__btn-active')
    $('.step__btn1').removeClass('step__btn-active')
    $('.step__btn4').removeClass('step__btn-active') 
    $('.step__btn5').removeClass('step__btn-active') 
    $('.step__pics').removeClass('step__pics-active2') 
    $('.step__pics').removeClass('step__pics-active1') 
    $('.step__pics').addClass('step__pics-active3') 
    $('.step__pics').removeClass('step__pics-active4') 
    $('.step__pics').removeClass('step__pics-active5')
    $(this).addClass('step__btn-active')
})
$('.step__btn4').on('click', function (e) {
    e.preventDefault()
    $('.step__content ').addClass('step__content-active')
    $('.step__buttons').addClass('step__buttons-active')
    $('.step__buttons').removeClass('step__buttons-unactive')
    $('.step__btn1').removeClass('step__btn-active')
    $('.step__btn3').removeClass('step__btn-active')
    $('.step__btn2').removeClass('step__btn-active') 
    $('.step__btn5').removeClass('step__btn-active') 
    $('.step__pics').removeClass('step__pics-active2') 
    $('.step__pics').removeClass('step__pics-active1') 
    $('.step__pics').removeClass('step__pics-active3') 
    $('.step__pics').addClass('step__pics-active4') 
    $('.step__pics').removeClass('step__pics-active5')
    $(this).addClass('step__btn-active')
})
$('.step__btn5').on('click', function (e) {
    e.preventDefault()
    $('.step__content ').addClass('step__content-active')
    $('.step__buttons').addClass('step__buttons-active')
    $('.step__buttons').removeClass('step__buttons-unactive')
    $('.step__btn1').removeClass('step__btn-active')
    $('.step__btn3').removeClass('step__btn-active')
    $('.step__btn2').removeClass('step__btn-active') 
    $('.step__btn4').removeClass('step__btn-active') 
    $('.step__pics').removeClass('step__pics-active2') 
    $('.step__pics').removeClass('step__pics-active1') 
    $('.step__pics').removeClass('step__pics-active3') 
    $('.step__pics').removeClass('step__pics-active4') 
    $('.step__pics').addClass('step__pics-active5')
    $(this).addClass('step__btn-active')
})