export const createSelectElementOptions = (selectContainer, selectValues, defaultCodCi) => {
    var selectOptions = `<option value=""></option>`;
    selectValues.forEach(element => {
        let { value, title } = element;
        if (value == defaultCodCi) {
            selectOptions += `<option value="${value}" selected>${title}</option>`;
        }
        else {
            selectOptions += `<option value="${value}">${title}</option>`;
        }
    });
    selectContainer.innerHTML = selectOptions;
};

