'use strict'

const mainMenuOpeningButton = document.querySelector('.main-menu__burger-button');
const mainMenuList = document.querySelector('.main-menu__list');

mainMenuOpeningButton.addEventListener('click', (evt) => {
   evt.preventDefault();
   mainMenuOpeningButton.classList.toggle('menu-closed');
   mainMenuOpeningButton.classList.toggle('menu-opened');
   mainMenuList.classList.toggle('menu-closed');
   mainMenuList.classList.toggle('menu-opened');
});