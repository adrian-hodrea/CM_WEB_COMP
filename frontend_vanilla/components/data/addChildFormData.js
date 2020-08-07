export let addChildFormData = {
    title: "Adauga Copil",
    baseDbTable: "copii",
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
            fieldName: "cnp",
            valueType: "text",
            title: "CNP",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "seriaCN",
            valueType: "text",
            title: "Serie Certificat de Nastere",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "numarCN",
            valueType: "text",
            title: "Numar Certificat de Nastere",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "dataNasterii",
            valueType: "date",
            title: "Data nasterii",
            required: "required"
        },
        {
            fieldType: "select",
            fieldName: "tataFk",
            valueType: "text",
            title: "Tata",
            required: "required",
            joinedTable: "persoane",
            joinedColumn: "pers",
            displayedJoinedColumn: ['nume','prenume']
        },
        {
            fieldType: "select",
            fieldName: "mamaFk",
            valueType: "text",
            title: "Mama",
            required: "required",
            joinedTable: "persoane",
            joinedColumn: "pers",
            displayedJoinedColumn: ['nume','prenume']
        }
    ]
}
