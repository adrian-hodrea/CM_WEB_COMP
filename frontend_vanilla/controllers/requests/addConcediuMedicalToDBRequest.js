import { ConcediuMedical } from "../../models/ConcediuMedical.js";
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function addConcediuMedicalToDBRequest(formDataObj) {
    try {
        var concediuMedicalNou = {};
        var concediuMedicalNou = new ConcediuMedical(formDataObj);
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/concedii_medicale';
        let response = await concediuMedicalNou.adaugaConcediuMedicalInBD(apiUrl);
        let bodyData = await response.json();
        promptInfoMessage(bodyData.message);
    } catch (err) {
        promptInfoMessage("Adaugarea Concediului Medical NU s-a efectuat. Eroare de retea sau server!")
    }
}

