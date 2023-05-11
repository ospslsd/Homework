var mixer = mixitup('.blog__items');
$('.blog__btn-item ').on('click', function(){
  $('.blog__btn-item ').removeClass('blog__btn-item--active ')
  $(this).addClass('blog__btn-item--active ')
}) ;

$('.comments__slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 2,
  arrows:false,
  autoplay:true,
  waitForAnimate: false,
  responsive: [{
      breakpoint: 1021,
      settings: {
      slidesToShow:1
      }
    }
  ]
});

$('.slider__arrow-prev').on('click', function(e) {
  e.preventDefault()
  $('.comments__slider').slick('slickPrev')
})
$('.slider__arrow-nxt').on('click', function(e) {
  e.preventDefault()
  $('.comments__slider').slick('slickNext')
})