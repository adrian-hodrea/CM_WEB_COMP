import { CodIndemnizatie } from "../../models/CodIndemnizatie.js";
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function addCodIndemnizatieToDBRequest(formDataObj) {
    try {
        var codIndemnizatieNou = {};
        var codIndemnizatieNou = new CodIndemnizatie(formDataObj);
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/coduri_indemnizatie';
        let response = await codIndemnizatieNou.adaugaCodIndemnizatieInBD(apiUrl);
        let bodyData = await response.json();
        promptInfoMessage(bodyData.message);
    } catch (err) {
        promptInfoMessage("Adaugarea Codului de Indemnizatie NU s-a efectuat. Eroare de retea sau server!")
    }
}

