Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

  var mixer = mixitup('.directions__list');

$('.directions__filter-btn').on('click', function(){
  $('.directions__filter-btn').removeClass('directions__filter-btn--active')
  $(this).addClass('directions__filter-btn--active')
}) 

$('.team__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  draggable:false,
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
$('.team__slider-prev').on('click',function(e){
e.preventDefault()
$('.team__slider').slick('slickPrev')
})
$('.team__slider-next').on('click',function(e){
e.preventDefault()
$('.team__slider').slick('slickNext')
})



