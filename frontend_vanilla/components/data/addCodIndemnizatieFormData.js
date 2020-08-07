export let addCodIndemnizatieFormData = {
    title: "Adauga Cod Indemnizatie Concediu Medical",
    baseDbTable: "coduri_indemnizatie",
    fieldsData: [
        {
            fieldType: "input",
            fieldName: "codIndemnizatie",
            valueType: "text",
            title: "Cod Indemnizatie",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "descriereIndemnizatie",
            valueType: "text",
            title: "Descriere Cod Indemnizatie",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "procent",
            valueType: "text",
            title: "Procent Cod Indemnizatie",
            required: "required"
        }
    ]
}
