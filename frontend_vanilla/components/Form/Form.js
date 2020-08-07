import { FormInputPair } from './FormInputPair.js';
import { checkMandatoryFields } from '../../ownModules/checkMandatoryFields.js';
import { promptInfoMessage } from "../../ownModules/infoMessage.js";
import { appendDbSelectValues } from '../../ownModules/appendDbSelectValues.js';

export class Form extends HTMLElement {
    constructor(formData, buttonFunctionality) {
        super();
        let { title, fieldsData } = formData;
        this.fieldsData = fieldsData;
        this.innerHTML = `
            <div class="form">
                <h1>${title}</h1>
                <hr>
                <div id="inputFieldsContainer">
                </div>
                <input id="sendButton" type="button" value="${title}" class="registerbtn"></input>
            </div>    
        `
        /* add button click functionality after mandatory fields ar OK */
        let self = this;
        this.querySelector("#sendButton").addEventListener('click',
            function () {
                return self.handleButtonClick(buttonFunctionality);
            })
    }

    handleButtonClick(buttonFunctionality) {
        if (checkMandatoryFields(inputFieldsContainer)) {
            const inputFields = inputFieldsContainer.querySelectorAll("input, select");
            var formDataObj = {};
            inputFields.forEach(element => {
                formDataObj[element.name] = element.value;
            })
            console.log(formDataObj);
            buttonFunctionality(formDataObj);
        }
        else {
            promptInfoMessage("Completati toate campurile obligatorii marcate cu rosu");
        }
    }

    async connectedCallback() {
        await appendDbSelectValues(this.fieldsData);
               /* insert input fields pairs */
        let inputFieldsContainer = this.querySelector('#inputFieldsContainer');
        this.fieldsData.forEach(inputPairData => {
            let inputPairComp = new FormInputPair(inputPairData);
            inputFieldsContainer.appendChild(inputPairComp);
        });
    }
}

window.customElements.define('input-form', Form);