import { Persoana } from "../../models/Persoana.js";
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function addPersonToDBRequest(formDataObj) {
    try {
        var persoanaNoua = {};
        var persoanaNoua = new Persoana(formDataObj);
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/persoane';
        let response = await persoanaNoua.adaugaPersoanaInBD(apiUrl);
        let bodyData = await response.json();
        promptInfoMessage(bodyData.message);
    } catch (err) {
        promptInfoMessage("Adaugarea persoanei NU s-a efectuat. Eroare de retea sau server!")
    }
}

