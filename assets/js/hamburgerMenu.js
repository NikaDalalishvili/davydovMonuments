const menu_btn = document.querySelector('.header-hamburger-btn');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    document.body.classList.toggle('overflow-h');
});
