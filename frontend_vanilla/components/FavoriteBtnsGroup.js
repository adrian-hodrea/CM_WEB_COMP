import {FavoriteBtn} from './FavoriteBtn.js';

export class FavoriteBtnsGroup extends HTMLElement {
    constructor(menu) {
        super();
        let { icon, titlu } = menu;
        this.innerHTML = `
            <style>
            .FavoriteBtnsGroup {
                float: left;
                width: 20%;
                box-sizing: border-box; 
                margin:25px;
                background-color: rgba(0,0,0,0.1);;
            }
            .favBtnGroupHeaderLayout {
                    padding: 8px;
                    text-align: center;
                    font-size: 24px;
            }
            .favBtnGroupBodyLayout {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                flex-wrap: wrap;
            }
            </style>
            <div class="FavoriteBtnsGroup">
                <div class="btnPainting favBtnGroupHeaderLayout">
                    <i class="btnIconPainting ${icon}"></i>
                    <span class="btnTextPainting">${titlu}</span>
                </div>
                <div id="btnGrBody" class="favBtnGroupBodyLayout">
                </div>
            </div>   
        `        
        let btnGrBody = this.querySelector("#btnGrBody"); 
        menu.buttons.forEach(btnData => {
            let btn = new FavoriteBtn(btnData);
            btnGrBody.appendChild(btn);
        })
    }
}

window.customElements.define('favorite--btns--group', FavoriteBtnsGroup);


