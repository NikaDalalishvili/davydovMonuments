// Get the header element
let headerB = document.querySelector('.header-btns');
let headerH = headerB.offsetHeight;
let mobileNav = document.querySelector('.mobile-nav');

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop &&
      window.pageYOffset >= headerH &&
      !mobileNav.classList.contains('is-active')) {
    // scrolling down
    headerB.classList.add('header-hide');
  } else {
    // scrolling up
    headerB.classList.remove('header-hide');
  }
  lastScrollTop = currentScrollTop;
});
