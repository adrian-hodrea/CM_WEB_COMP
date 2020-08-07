import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function getChooseList(table) {
    try {
        const root = window.localStorage.getItem("root");
        const apiUrl = root + `/${table}/chooseList`;
        let response = await fetch(apiUrl);
        let bodyData = await response.json();
        return bodyData;
    } catch (err) {
        promptInfoMessage("A Aparut o eroare!")
    }
}

