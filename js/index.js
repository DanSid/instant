// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//     //   delay:5000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// Init swiper sliders

function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
        let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
        new Swiper(swiper, config);
    });
}
window.addEventListener('load', initSwiper);


  // Scrolling function
  $(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#nav-bar').addClass('scrolled');
        } else {
            $('#nav-bar').removeClass('scrolled');
        }
    });
});


  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);




$(document).ready(function() {
    // Show or hide the button when scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.symbol-back').fadeIn();
        } else {
            $('.symbol-back').fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    $('.symbol-back').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});