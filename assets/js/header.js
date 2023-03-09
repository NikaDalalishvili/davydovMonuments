// Get the header element
let header = document.querySelector('header');
let headerH = header.offsetHeight;

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop &&
      window.pageYOffset >= headerH) {
    // scrolling down
    header.classList.add('header-hide');
  } else {
    // scrolling up
    header.classList.remove('header-hide');
  }
  lastScrollTop = currentScrollTop;
});
