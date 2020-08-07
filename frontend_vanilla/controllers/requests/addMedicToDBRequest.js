import { Medic } from "../../models/Medic.js";
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function addMedicToDBRequest(formDataObj) {
    try {
        var medicNou = {};
        var medicNou = new Medic(formDataObj);
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/medici';
        let response = await medicNou.adaugaMedicInBD(apiUrl);
        let bodyData = await response.json();
        promptInfoMessage(bodyData.message);
    } catch (err) {
        promptInfoMessage("Adaugarea medicului NU s-a efectuat. Eroare de retea sau server!")
    }
}

