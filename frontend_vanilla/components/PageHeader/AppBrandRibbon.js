export class AppBrandRibbon extends HTMLElement {
    constructor() {
        super();
        this.AppBrandRibbon = this.attachShadow({mode: "open"});

        this.AppBrandRibbon.innerHTML = `
            <style>
                .app__brand__ribbon {
                    width: 100%;
                    height: 7vh;
                    background-color: var(--main-color);
                    display: flex;
                    align-items: center;
                }
                .app__brand {
                    font-family: 'Tangerine', cursive;
                    color: var(--font-color-black);
                    font-weight: 600;
                    font-size: 48px;
                }
            </style>

            <div class="app__brand__ribbon page__justify__align">
                <a class="app__brand">Viking Docs</a>
            </div>
        `
    }
}

window.customElements.define('app--brand--ribbon',AppBrandRibbon);