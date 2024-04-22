import './style.css';
import createRestaurantHomePage from './home.js';
import createMenuPage from './menu.js';
import createAboutUsPage from './aboutUs.js';

createRestaurantHomePage();

function clearContent() {
    content.innerHTML = '';
}

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutUsButton = document.querySelector('#aboutUs-button');

homeButton.addEventListener('click', () => {
	clearContent();
    createRestaurantHomePage();
});

menuButton.addEventListener('click', () => {
	clearContent();
	createMenuPage();
});

aboutUsButton.addEventListener('click', () => {
	clearContent();
	createAboutUsPage();
});