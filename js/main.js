$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
      lazy: true,
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      loop: true, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },    
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
  });
});