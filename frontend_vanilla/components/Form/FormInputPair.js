import { createSelectElementOptions } from '../../ownModules/createSelectElementOptions.js';

export class FormInputPair extends HTMLElement {
    constructor(inputFieldPairData) {
        super();
        let {fieldType,fieldName,valueType,title,required,selectValues} = inputFieldPairData;
        if (required) {
            var iconClass = "fas fa-star";
        } else {
            var iconClass = "fas fa-star fantom";
        }
        this.innerHTML = `
            <div class="formInputPair">
                <i class="${iconClass}"></i>
                <label for="${fieldName}"><b>${title}</b></label>
                <${fieldType} 
                    id="${fieldName}" 
                    type="${valueType}" 
                    name="${fieldName}" 
                    ${required}>
                 </${fieldType}>   
            </div>
        `
        if (selectValues) {
            let selectContainer = this.querySelector(`#${fieldName}`);
            createSelectElementOptions(selectContainer,selectValues);
        }

        
    }
}

window.customElements.define('form--input--pair', FormInputPair);