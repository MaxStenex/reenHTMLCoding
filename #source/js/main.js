'use strict'

const mainMenuOpeningButton = document.querySelector('.main-menu__burger-button');
const mainMenuList = document.querySelector('.main-menu__list');
const worksSliderList = document.querySelector('.works-slider__list');
const worksSliderButtons = document.querySelectorAll('.works-slider__button');

mainMenuOpeningButton.addEventListener('click', (evt) => {
   evt.preventDefault();
   mainMenuOpeningButton.classList.toggle('menu-closed');
   mainMenuOpeningButton.classList.toggle('menu-opened');
   mainMenuList.classList.toggle('menu-closed');
   mainMenuList.classList.toggle('menu-opened');
});

for (let i = 0; i < worksSliderButtons.length; i++) {
   worksSliderButtons[i].addEventListener('click', (evt) => {
      const button = evt.target;
      const sliderImage = document.querySelector('.works-slider__item img');
      worksSliderList.style.marginLeft = (-sliderImage.clientWidth * 4 - 30 * 3) * i + 'px';
      worksSliderButtons.forEach(button => {
         button.classList.remove('works-slider__button--active');
      })
      button.classList.add('works-slider__button--active');
   })
}
