export let addContractCasFormData = {
    title: "Adauga Contract CAS",
    baseDbTable: "contracte_concedii",
    fieldsData: [
        {
            fieldType: "select",
            fieldName: "casFk",
            valueType: "text",
            title: "Casa de Sanatate",
            required: "required",
            joinedTable: "case_de_sanatate",
            joinedColumn: "cas",
            displayedJoinedColumn: ['denumire']   
        },
        {
            fieldType: "select",
            fieldName: "persFk",
            valueType: "text",
            title: "Nume Asigurat",
            required: "required",
            joinedTable: "persoane",
            joinedColumn: "pers",
            displayedJoinedColumn: ['nume','prenume']    
        },
        {
            fieldType: "input",
            fieldName: "nrCtr",
            valueType: "text",
            title: "Numar Contract",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "dataSemnarii",
            valueType: "date",
            title: "Data Semnarii",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "dataInceput",
            valueType: "date",
            title: "Data Inceput Valabilitate",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "dataSfarsit",
            valueType: "date",
            title: "Data Sfarsit Valabilitate",
            required: "required"
        }
    ]
}
