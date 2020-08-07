export let addMedicFormData = {
    title: "Adauga Medic",
    baseDbTable: "medici",
    fieldsData: [
        {
            fieldType: "input",
            fieldName: "nume",
            valueType: "text",
            title: "Nume",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "prenume",
            valueType: "text",
            title: "Prenume",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "id",
            valueType: "text",
            title: "ID",
            required: "required"
        }
    ]
}
