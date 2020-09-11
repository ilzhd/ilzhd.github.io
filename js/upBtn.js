          // btn
(function() {
  'use strict';

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('btn-top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('btn-top-show');
      }
    }

  function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0,-50);
        setTimeout(backToTop,0);
      }
  }

  let goTopBtn = document.querySelector('.btn-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();
