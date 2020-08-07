import { tipuriCI } from '../data/chooseListsData.js';
export let addPersonFormData = {
    title: "Adauga Persoana",
    baseDbTable: "persoane",
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
            fieldType: "select",
            fieldName: "tipCI",
            valueType: "text",
            title: "Tip Document de Identitate",
            required: "required",
            selectValues: tipuriCI
        },
        {
            fieldType: "input",
            fieldName: "seriaCI",
            valueType: "text",
            title: "Serie Document de Identitate",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "numarCI",
            valueType: "text",
            title: "Numar Document de Identitate",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "eliberatDeCI",
            valueType: "text",
            title: "Document de Identitate eliberat de",
            required: null
        },
        {
            fieldType: "input",
            fieldName: "dataEliberariiCI",
            valueType: "date",
            title: "Data eliberarii Doc. de Identitate",
            required: null
        },
        {
            fieldType: "input",
            fieldName: "localitatea",
            valueType: "text",
            title: "Localitatea",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "strada",
            valueType: "text",
            title: "Strada",
            required: null
        },
        {
            fieldType: "input",
            fieldName: "nrStrada",
            valueType: "text",
            title: "Numar",
            required: null
        },
        {
            fieldType: "input",
            fieldName: "bloc",
            valueType: "text",
            title: "Bloc",
            required: null
        },
        {
            fieldType: "input",
            fieldName: "scara",
            valueType: "text",
            title: "Scara",
            required: null
        },
        {
            fieldType: "input",
            fieldName: "nrApartament",
            valueType: "text",
            title: "Numar apartament",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "judet",
            valueType: "text",
            title: "Judet",
            required: "required"
        },
        {
            fieldType: "input",
            fieldName: "sector",
            valueType: "text",
            title: "Sector",
            required: null
        },
        {
            fieldType: "input",
            fieldName: "telefon",
            valueType: "text",
            title: "Telefon",
            required: null
        }
    ]
}
