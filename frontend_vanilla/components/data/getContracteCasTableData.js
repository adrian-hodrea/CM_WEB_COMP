import { ContractCas } from '../../models/ContractCas.js'
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function getContracteCasTableData() {
    let contracteCasTableData = {
        title: "Lista Contracte CAS",
        columns: [
            'Nr crt',
            'Persoana Asigurata',
            'Casa de Sanatate',
            'Numar Contract',
            'Data Semnarii',
            'Data Inceput Valabilitate',
            'Data Sfarsit Valabilitate',
            'Actions'
        ]
    }
    try {
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/contracte_concedii';
        let response = await ContractCas.getAllContracteCas(apiUrl);
        let bodyData = await response.json();
        contracteCasTableData.rows = bodyData;
        return contracteCasTableData;
    } catch (err) {
        promptInfoMessage("Datele nu pot fi afisate.Eroare de retea sau server!")
    }
} 