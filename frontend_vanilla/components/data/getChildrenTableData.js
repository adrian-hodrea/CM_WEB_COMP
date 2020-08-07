import { Child } from '../../models/Child.js'
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function getChildrenTableData() {
    let childrenTableData = {
        title: "Lista copii",
        columns: [
            'Nr crt',
            'Nume',
            'Prenume',
            'CNP',
            'Serie Certificat Nastere',
            'Numar Certificat Nastere',
            'Data nasterii',
            'Tata',
            'Mama',
            'Actions'
        ]
    }
    try {
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/copii';
        let response = await Child.getAllChildren(apiUrl);
        let bodyData = await response.json();
        childrenTableData.rows = bodyData;
        return childrenTableData;
    } catch (err) {
        promptInfoMessage("Datele nu pot fi afisate.Eroare de retea sau server!")
    }
} 