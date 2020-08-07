import { CmStatus } from "../../models/CmStatus.js";
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function addCmStatusToDBRequest(formDataObj) {
    try {
        var cmStatusNou = {};
        var cmStatusNou = new CmStatus(formDataObj);
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/cm_statuses';
        let response = await cmStatusNou.adaugaCmStatusInBD(apiUrl);
        let bodyData = await response.json();
        promptInfoMessage(bodyData.message);
    } catch (err) {
        promptInfoMessage("Adaugarea Statusului de Concediu Medical NU s-a efectuat. Eroare de retea sau server!")
    }
}

