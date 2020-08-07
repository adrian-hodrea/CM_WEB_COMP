const checkMandatoryFields = (parentElement) => {
    const requiredFields = parentElement.querySelectorAll("*[required]");

    var allRequiredFieldsOK = true;
    requiredFields.forEach( (item)=> {
        if (item.value === "") {
            allRequiredFieldsOK = false;
            item.classList.add("mandatoryField");
        }
        else {
            item.classList.remove("mandatoryField");
        }
    })
    return allRequiredFieldsOK;
}

export { checkMandatoryFields };