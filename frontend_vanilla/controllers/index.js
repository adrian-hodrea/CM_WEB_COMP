import {PageHeader} from '../components/PageHeader/PageHeader.js';
import {FavoriteBtnsGroup} from '../components/FavoriteBtnsGroup.js';
import {favoritesMenuData} from '../components/data/favBtnData.js';

const root = "http://localhost:3000";
window.localStorage.setItem("root" , `${root}`);

let menuContainer = document.getElementById('favoritesMenuContainer');
favoritesMenuData.forEach( menu => {
    let favBtnGr = new FavoriteBtnsGroup(menu);
    menuContainer.appendChild(favBtnGr);
})

export { PageHeader}