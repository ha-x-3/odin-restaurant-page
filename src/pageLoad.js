import createRestaurantHomePage from './home.js';
import manageTabs from './tabs.js';

function initialLoad() {
    manageTabs();
    createRestaurantHomePage();
}

export default initialLoad;