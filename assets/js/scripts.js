// swiper
var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
var portfolio = new Swiper(".portfolio", {
  slidesPerView: 2,
  spaceBetween: 25,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 55,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var forms = new Swiper(".forms", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  }
});
var customers = new Swiper(".customers", {
  slidesPerView: 2,
  spaceBetween: 25,
  autoplay: true,
  breakpoints: {
    400: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 8,
    },
    1200: {
      slidesPerView: 10,
    },
  }
});
var relatedBlog = new Swiper(".relatedBlog", {
  slidesPerView: 1,
  spaceBetween: 25,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});