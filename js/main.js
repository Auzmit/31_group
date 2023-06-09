const navBar = document.querySelector('.mobile-nav-bar');
const primaryNav = document.querySelector('.primary-navigation');

navBar.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible') ? navBar.setAttribute('aria-expanded', false) : navBar.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible');
});
/* eslint-disable */
const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  arrows: false,
  dots: true,
});
/* eslint-enable */
