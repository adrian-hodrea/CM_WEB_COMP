export class FavoriteBtn extends HTMLElement {
    constructor(btnData) {
        super();
        let { icon, titlu, linkToPage} = btnData;
        this.innerHTML = `
            <style>
                .btnLayout {
                    box-sizing: border-box;
                    width: 100px;
                    height: 100px;
                    margin: 3px 3px 0 0;
                    display: inline-block;
                    position: relative;
                    text-align: center;
                }
                        
                .btnIconLayout {
                    display: inline-block;
                    font-size: 32px;
                    width: 100%;
                    margin: 20px 0 auto;
                }
                        
                .btnTextLayout {
                    margin: 8px 0px;
                    font-size: 12px;
                    font-weight: 300;
                }
            </style>

            <div class="btnPainting btnLayout">
                <i class="btnIconPainting btnIconLayout ${icon}"></i>
                <span class="btnTextPainting btnTextLayout">${titlu}</span>
            </div>   
        `

        this.addEventListener("click", function() {
            const root = window.localStorage.getItem("root");
            const pageUrl = `${root}${linkToPage}`;
            window.open(pageUrl);
        })
    }
}

window.customElements.define('favorite--button',FavoriteBtn);

/*                 <i class="iconPainting iconLayout ${icon}"></i>
*/