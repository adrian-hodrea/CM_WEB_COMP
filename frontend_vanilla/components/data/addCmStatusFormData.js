export let addCmStatusFormData = {
    title: "Adauga Status Concediu Medical",
    baseDbTable: "cm_statuses",
    fieldsData: [
        {
            fieldType: "input",
            fieldName: "statName",
            valueType: "text",
            title: "Denumire",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "activeFlag",
            valueType: "text",
            title: "Status Activ?",
            required: null
        },
        {
            fieldType: "input",
            fieldName: "ord",
            valueType: "number",
            title: "Ordine Afisare",
            required: "required"
        }
    ]
}
