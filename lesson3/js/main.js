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
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
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
  dots: true

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
setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header_top').hasClass('header__top--open') === false ){
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
}, 0)

$('.burger, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.header_top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
})
