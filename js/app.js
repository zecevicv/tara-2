/* #Products
======================================================= */
new Swiper(".products .swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".products .swiper-button-next",
    prevEl: ".products .swiper-button-prev",
  },
});

/* #Sticky Btn
======================================================= */
const stickyBtn = document.querySelector('.sticky-btn');

stickyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  $('html, body').animate({
    scrollTop: $(".contact").offset().top
  }, 500);
});