var mainSwiper = new Swiper(".main-slide-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  allowTouchMove: true,
  watchOverflow: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".main-slide-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".main-slide-button-next",
    prevEl: ".main-slide-button-prev",
  },
  breakpoints: {
    801: {
      slidesPerView: 1.0000005,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});
