const swiper = new Swiper('.swiper', {
  // Default parameters
   slidesPerView: 1,
   spaceBetween: 10,
   slidesPerGroup: 1,
   freeMode: true,

   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   
   breakpoints: {
      768:{
         slidesPerView: 2,
         spaceBetween: 10,
      },

      1024:{
         slidesPerView: 3,
         spaceBetween: 10,
      }
         

      }
});

  