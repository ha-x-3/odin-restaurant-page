import createRestaurantHomePage from "./home";
import createMenuPage from "./menu";
import createAboutUsPage from "./aboutUs";

const manageTabs = () => {
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector('#menu-button');
    const aboutUsButton = document.querySelector('#aboutUs-button');

    homeButton.addEventListener("click", () => {
        clearContent();
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });

    aboutUsButton.addEventListener('click', () => {
        clearContent();
        createAboutUsPage();
    });
};

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector("#page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default manageTabs;