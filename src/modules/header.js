const burger = document.querySelector('.header__burger');
const navButtonWrapper = document.querySelector('.header__nav-button-wrapper');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_active');
    navButtonWrapper.classList.toggle('header__nav-button-wrapper_active');
   })