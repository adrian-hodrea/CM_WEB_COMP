export let addCasFormData = {
    title: "Adauga Casa de Sanatate",
    baseDbTable: "case_de_sanatate",
    fieldsData: [
        {
            fieldType: "input",
            fieldName: "cui",
            valueType: "text",
            title: "CUI",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "denumire",
            valueType: "text",
            title: "Denumire",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "adresa",
            valueType: "text",
            title: "Adresa",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "iban",
            valueType: "text",
            title: "Cont IBAN",
            required: "required"
        }
    ]
}
