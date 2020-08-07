import { Medic } from '../../models/Medic.js'
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function getMediciTableData() {
    let mediciTableData = {
        title: "Lista medici",
        columns: [
            'Nr crt',
            'ID',
            'Nume',
            'Prenume',
            'Actions'
        ]
    }
    try {
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/medici';
        let response = await Medic.getAllMedici(apiUrl);
        let bodyData = await response.json();
        mediciTableData.rows = bodyData;
        return mediciTableData;
    } catch (err) {
        promptInfoMessage("Datele nu pot fi afisate.Eroare de retea sau server!")
    }
} 