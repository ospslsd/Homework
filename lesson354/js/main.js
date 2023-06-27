Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

var mixer = mixitup('.directions__list');

$('.directions__filter-btn').on('click', function () {
  $('.directions__filter-btn').removeClass('directions__filter-btn--active')
  $(this).addClass('directions__filter-btn--active')
})

$('.team__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
$('.team__slider-prev').on('click', function (e) {
  e.preventDefault()
  $('.team__slider').slick('slickPrev')
})
$('.team__slider-next').on('click', function (e) {
  e.preventDefault()
  $('.team__slider').slick('slickNext')
})


$('.reviews__slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 700,
      settings: {
      }
    }
  ]
})

$('.reviews__arrow-prev').on('click', function (e) {
  e.preventDefault()
  $('.reviews__slide').slick('slickPrev')
})
$('.reviews__arrow-nxt').on('click', function (e) {
  e.preventDefault()
  $('.reviews__slide').slick('slickNext')
})

$('.program__acc-link').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('program__acc-link--active')
  $(this).children('.program__acc-text').slideToggle()
})

  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 0 && $('.header_top').hasClass('header__top--open') === false ){
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }
  )



$('.burger, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.header_top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
})

$('.header_nav-item').on('click', function () {
  $('.header_top').removeClass('header__top--open')
  $('.overlay').removeClass('overlay--show')
})


$('.footer__acc1').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('footer__acc--active')
  $('.footer__acc-columns1').slideToggle()
})
$('.footer__acc2').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('footer__acc--active')
  $('.footer__acc-columns2').slideToggle()
})
$('.footer__acc3').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('footer__acc--active')
  $('.footer__acc-columns3').slideToggle()
})

