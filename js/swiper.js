// First Info Swiper
const swiper = new Swiper(".first", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".first-nav",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".first-next",
    prevEl: ".first-prev",
  },

  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

// Famous Swiper
const swiper2 = new Swiper(".second", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".famous-nav",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".second-next",
    prevEl: ".second-prev",
  },

  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1110: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

// New Swiper
const swiper3 = new Swiper(".third", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".third-nav",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".third-next",
    prevEl: ".third-prev",
  },

  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1110: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

// Suggestion Swiper
const swiper4 = new Swiper(".fourth", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".fourth-next",
    prevEl: ".fourth-prev",
  },

  // Default parameters
  slidesPerView: 3,
  spaceBetween: 32,
});

// Suggestion Swiper
const table = new Swiper(".table", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".table-next",
    prevEl: ".table-prev",
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 32,
});

// Suggestion Swiper
const schedule = new Swiper(".miyu", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".schedule-prev",
    nextEl: ".schedule-next",
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 32,
});

// Question Swiper
const question = new Swiper(".question", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".question-next",
    prevEl: ".question-prev",
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 32,
});

// Checkout Swiper
const checkout = new Swiper(".checkout", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".checkout-next",
    prevEl: ".checkout-prev",
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 32,
});

// Choose Plan Swiper
const choose = new Swiper(".choose", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".choose-next",
    prevEl: ".choose-prev",
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 32,
});

// Auth Swiper
const auth = new Swiper(".auth", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".auth-next",
    prevEl: ".auth-prev",
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 32,
});
