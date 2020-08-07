import { CodIndemnizatie } from '../../models/CodIndemnizatie.js'
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function getCoduriIndemnizatieTableData() {
    let coduriIndemnizatieTableData = {
        title: "Lista Coduri Indemnizatie",
        columns: [
            'Nr crt',
            'Cod Indemnizatie',
            'Descriere',
            'Procent',
            'Actions'
        ]
    }
    try {
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/coduri_indemnizatie';
        let response = await CodIndemnizatie.getAllCoduriIndemnizatie(apiUrl);
        let bodyData = await response.json();
        coduriIndemnizatieTableData.rows = bodyData;
        return coduriIndemnizatieTableData;
    } catch (err) {
        promptInfoMessage("Datele nu pot fi afisate.Eroare de retea sau server!")
    }
} 