/* #New Products (image compare viewer)
  ======================================================= */
const imageCompareEl = document.getElementById("image-compare");
const options = {
  startingPoint: 50,
  smoothingAmount: 50
}

const viewer = new ImageCompare(imageCompareEl, options).mount();

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