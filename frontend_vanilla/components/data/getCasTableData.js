import { Cas } from '../../models/Cas.js'
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function getCasTableData() {
    let casTableData = {
        title: "Lista Case de Sanatate",
        columns: [
            'Nr crt',
            'CUI',
            'Denumire',
            'Adresa',
            'IBAN',
            'Actions'
        ]
    }
    try {
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/case_de_sanatate';
        let response = await Cas.getAllCas(apiUrl);
        let bodyData = await response.json();
        casTableData.rows = bodyData;
        return casTableData;
    } catch (err) {
        promptInfoMessage("Datele nu pot fi afisate.Eroare de retea sau server!")
    }
} 