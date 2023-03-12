// Get the header element
let headerNav = document.querySelector('.header-nav');
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
    headerNav.classList.add('header-nav-hide');
    console.log(headerH);
  } else {
    // scrolling up
    console.log(window.pageYOffset + " PageY");
    headerB.classList.remove('header-hide');
    headerNav.classList.remove('header-nav-hide');
  }
  lastScrollTop = currentScrollTop;
});
