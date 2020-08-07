export class GreyTopRibbon extends HTMLElement {
    constructor() {
        super();
        this.greyTopRibbonRoot = this.attachShadow({mode: "open"});

        this.greyTopRibbonRoot.innerHTML = `
            <style>
                .grey__top__ribbon {
                    width: 100%;
                    height: 8vh;
                    background-color: var(--menu-color);
                }
            </style>

            <div class="grey__top__ribbon page__justify__align"></div>
        `
    }
}

window.customElements.define('grey--top--ribbon',GreyTopRibbon);