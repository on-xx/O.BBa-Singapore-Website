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

const swiper4 = new Swiper(".swiper-promo", {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  autoHeight: false,
  loop: true,

  autoplay: {
    delay : 1000,
  },

  // breakpoints: {
  //   1200: {
  //     slidesPerView : 4
  //   },
  //   750: {
  //     slidesPerView : 1,
  //     width: 300,
  //   },
  //   550: {
  //     slidesPerView : 1
  //   },

  //   300: {
  //     slidesPerView : 1
  //   },
  // }
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

// const breakpoint = window.matchMedia('(max-width: 500px)');

// const breakpointChecker = function() {
//   if(breakpoint.matches === true){
//     if(swiper2 !== undefined) {
//       swiper2.destroy(true, true);
//     } else {
//       return;
//     } 
//   } else if(breakpoint.matches === false){
//     return enableSwiper();
//   }
// }

// let swiper2;

// const enableSwiper = function() {
//   swiper2 = new Swiper(".swiper-promo", {
//     direction: 'horizontal',
//     slidesPerView: 'auto',
//     spaceBetween: 30,
//     autoHeight: false,
//     loop: true,
//     // centeredSlides: true,

//   })
// };

// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

