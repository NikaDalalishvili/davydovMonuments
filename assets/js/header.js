var lastScrollTop = 0;
var header = document.querySelector('header');

window.addEventListener('scroll', function() {
  var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    // scrolling down
    header.classList.add('header-hide');
  } else {
    // scrolling up
    header.classList.remove('header-hide');
  }
  lastScrollTop = currentScrollTop;
});
