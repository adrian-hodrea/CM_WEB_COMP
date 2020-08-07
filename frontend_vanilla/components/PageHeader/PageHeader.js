import {GreyTopRibbon} from './GreyTopRibbon.js';
import {AppBrandRibbon} from './AppBrandRibbon.js';

export class PageHeader extends HTMLElement {
    constructor() {
        super();
        const pageHeaderRoot = this.attachShadow({mode: "open"});

        const greyTopRibbon = new GreyTopRibbon();
        pageHeaderRoot.appendChild(greyTopRibbon);

        const appBrandRibbon = new AppBrandRibbon();
        pageHeaderRoot.appendChild(appBrandRibbon);

    }
}

window.customElements.define('page--header',PageHeader);