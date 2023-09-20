$(function () {
  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    speed: 500,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" fill="none"><path d="M8.197 18.05.45 10.302a1.548 1.548 0 0 1 0-2.184L8.197.373a1.548 1.548 0 0 1 2.184 2.184L3.735 9.203l6.646 6.662c.601.604.601 1.58 0 2.184a1.548 1.548 0 0 1-2.184 0Z"/></svg></button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" fill="none"><path d="M8.197 18.05.45 10.302a1.548 1.548 0 0 1 0-2.184L8.197.373a1.548 1.548 0 0 1 2.184 2.184L3.735 9.203l6.646 6.662c.601.604.601 1.58 0 2.184a1.548 1.548 0 0 1-2.184 0Z"/></svg></button>',
  });
});


var mixer = mixitup('.pop-categories__inner');
