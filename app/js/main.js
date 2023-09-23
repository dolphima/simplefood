$(function () {
  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    speed: 500,
    infinite: false,
    prevArrow: '<button type="button" class="reviews__arrow reviews__arrow--prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="reviews__arrow reviews__arrow--next"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
  });
});

// arrow - left

var mixer = mixitup('.pop-categories__inner');
