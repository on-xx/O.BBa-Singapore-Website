const swiper = new Swiper('.swiper-hero', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
      delay: 3000,
  }
  });

const swiper2 = new Swiper(".swiper-promo", {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  autoHeight: false,
  loop: true,

  breakpoints: {
    1200: {
      slidesPerView : 4
    },
    750: {
      slidesPerView : 3
    },
    550: {
      slidesPerView : 1
    },

    300: {
      slidesPerView : 1
    }
  }
});

const swiper3 = new Swiper(".swiper-obba-bbq", {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next-bbq',
    prevEl: '.swiper-button-prev-bbq',
  },

  pagination: {
    el: '.swiper-pagination-bbq',
  },

  

  loop: true,
});



