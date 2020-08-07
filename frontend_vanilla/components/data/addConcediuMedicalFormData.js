import { tipuriCMInitCont } from '../data/chooseListsData.js';

export let addConcediuMedicalFormData = {
    title: "Adauga Concediu Medical",
    baseDbTable: "concedii_medicale",
    fieldsData: [
        {
            fieldType: "input",
            fieldName: "serieCm",
            valueType: "text",
            title: "Serie Concediu Medical",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "numarCm",
            valueType: "text",
            title: "Numar Concediu Medical",
            required: "required"
        },
        {
            fieldType: "select",
            fieldName: "ctrFk",
            valueType: "text",
            title: "Contract asigurare",
            required: "required",
            joinedTable: "contracte_concedii",
            joinedColumn: "ctr",
            displayedJoinedColumn: ['nrCtr','dataSemnarii']   
        },
        {
            fieldType: "select",
            fieldName: "persFk",
            valueType: "text",
            title: "Persoana asigurata",
            required: "required",
            joinedTable: "persoane",
            joinedColumn: "pers",
            displayedJoinedColumn: ['nume','prenume']   
        },
        {
            fieldType: "input",
            fieldName: "dataAcordarii",
            valueType: "date",
            title: "Data acordarii",
            required: "required"
        },
        {
            fieldType: "select",
            fieldName: "medicFk",
            valueType: "text",
            title: "Medic emitent CM",
            required: "required",
            joinedTable: "medici",
            joinedColumn: "medic",
            displayedJoinedColumn: ['nume','prenume']   
        },
        {
            fieldType: "input",
            fieldName: "deLaData",
            valueType: "date",
            title: "De la data",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "laData",
            valueType: "date",
            title: "La data",
            required: "required"
        },
        {
            fieldType: "select",
            fieldName: "tipInitCont",
            valueType: "text",
            title: "Tip Initial/Continuare",
            required: "required",
            selectValues: tipuriCMInitCont
        },
        {
            fieldType: "select",
            fieldName: "codIndFk",
            valueType: "text",
            title: "Cod Indemnizatie",
            required: "required",
            joinedTable: "coduri_indemnizatie",
            joinedColumn: "codInd",
            displayedJoinedColumn: ['codIndemnizatie','descriereIndemnizatie']   
        },
        {
            fieldType: "select",
            fieldName: "cmInitFk",
            valueType: "text",
            title: "Concediu Medical Initial",
            required: null,
            joinedTable: "concedii_medicale",
            joinedColumn: "cm",
            displayedJoinedColumn: ['serieCm','numarCm']   
        },
        {
            fieldType: "select",
            fieldName: "copilFk",
            valueType: "text",
            title: "Copil",
            required: null,
            joinedTable: "copii",
            joinedColumn: "copil",
            displayedJoinedColumn: ['nume','prenume']   
        },
        {
            fieldType: "select",
            fieldName: "cmStatFk",
            valueType: "text",
            title: "Status",
            required: "required",
            joinedTable: "cm_statuses",
            joinedColumn: "cmStat",
            displayedJoinedColumn: ['statName']   
        }
    ]
}
