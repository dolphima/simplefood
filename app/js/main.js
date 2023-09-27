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
document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger-menu'); //наша кнопка
  const mobileMenu = document.querySelector('.menu-mob'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-mob--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu-mob--active')) { //Проверяем, есть ли у меню активный класс
      burger.classList.add('menu-mob--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('menu-mob--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });

  //Клик вне таргета
  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('menu-mob--active');
      bodyLock.classList.remove('lock');
    }
  });
});

$(window).on('load resize', function () {
  if ($(window).width() < 768) {
    $('.best-restaurant__inner:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".best - restaurant__inner.slick-initialized").slick("unslick");
  }
});

// arrow - left

var mixer = mixitup('.pop-categories__inner');
