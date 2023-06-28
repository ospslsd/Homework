
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
    arrows:false,
    dots:false
});
