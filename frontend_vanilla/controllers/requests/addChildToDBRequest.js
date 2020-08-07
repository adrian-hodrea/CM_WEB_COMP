import { Child } from "../../models/Child.js";
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function addChildToDBRequest(formDataObj) {
    try {
        var copilNou = {};
        var copilNou = new Child(formDataObj);
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/copii';
        let response = await copilNou.adaugaCopilInBD(apiUrl);
        let bodyData = await response.json();
        promptInfoMessage(bodyData.message);
    } catch (err) {
        promptInfoMessage("Adaugarea copilului NU s-a efectuat. Eroare de retea sau server!")
    }
}

