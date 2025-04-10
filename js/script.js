$(document).ready(function(){



  $(".up").click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, 200);
  });

  $(".down").click(function() {

    $('html').animate({scrollTop : ($('.down').offset().top)}, 200);
    
  
    
  });

  


  var swiper = new Swiper(".s1_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, 
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


  });

  var swiper = new Swiper(".s2_swiper", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


    breakpoints: {

      768: {
        slidesPerView: 2.8, 
        spaceBetween: 20,
      },
      1250: {
        slidesPerView: 3.8, 
        spaceBetween: 25,
      },
    },
  });

  var swiper = new Swiper(".s6_swiper", {
    slidesPerView: 1.5,
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      600: {
        slidesPerView: 2.5, 
        spaceBetween: 40,
      },
      850: {
        slidesPerView: 3, 
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 3.5, 
        spaceBetween: 35,
      },

      1620: {
        slidesPerView: 5, 
        spaceBetween: 37,
      },
    },
    

  });


  var swiper = new Swiper(".s7_swiper", {
    slidesPerView: 1.2,
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      574: {
        slidesPerView: 2, 
        spaceBetween: 30,
      },
      
      768: {
        slidesPerView: 2.3, 
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 3.2, 
        spaceBetween: 30,
      },

      1550: {
        slidesPerView: 5, 
        spaceBetween: 20,
      },
    },

  });

});