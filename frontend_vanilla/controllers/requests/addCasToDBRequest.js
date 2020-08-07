import { Cas } from "../../models/Cas.js";
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function addCasToDBRequest(formDataObj) {
    try {
        var casNoua = {};
        var casNoua = new Cas(formDataObj);
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/case_de_sanatate';
        let response = await casNoua.adaugaCasInBD(apiUrl);
        let bodyData = await response.json();
        promptInfoMessage(bodyData.message);
    } catch (err) {
        promptInfoMessage("Adaugarea Casei de Sanatate NU s-a efectuat. Eroare de retea sau server!")
    }
}

