import { ContractCas } from "../../models/ContractCas.js";
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function addContractCasToDBRequest(formDataObj) {
    try {
        var contractCasNou = {};
        var contractCasNou = new ContractCas(formDataObj);
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/contracte_concedii';
        let response = await contractCasNou.adaugaContractCasInBD(apiUrl);
        let bodyData = await response.json();
        promptInfoMessage(bodyData.message);
    } catch (err) {
        promptInfoMessage("Adaugarea Contractului CAS NU s-a efectuat. Eroare de retea sau server!")
    }
}

