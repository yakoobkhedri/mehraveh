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
  spaceBetween: 15,
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

// timer

// Set the target date and time for the countdown
const targetDate = new Date("November 31, 2024 23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // If the countdown is over, display a message and clear the interval
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "تمام شد";
    }
}, 1000);

// Set the target date and time for the countdown
const targetDate2 = new Date("November 31, 2024 23:59:59").getTime();

// Update the countdown every second
const countdownInterval2 = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days2").innerText = String(days).padStart(2, '0');
    document.getElementById("hours2").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes2").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds2").innerText = String(seconds).padStart(2, '0');

    // If the countdown is over, display a message and clear the interval
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown2").innerHTML = "تمام شد";
    }
}, 1000);

// Set the target date and time for the countdown
const targetDate3 = new Date("November 31, 2024 23:59:59").getTime();

// Update the countdown every second
const countdownInterval3 = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days3").innerText = String(days).padStart(2, '0');
    document.getElementById("hours3").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes3").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds3").innerText = String(seconds).padStart(2, '0');

    // If the countdown is over, display a message and clear the interval
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown3").innerHTML = "تمام شد";
    }
}, 1000);