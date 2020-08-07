import { Persoana } from '../../models/Persoana.js'
import { promptInfoMessage } from "../../ownModules/infoMessage.js";

export async function getPersonsTableData() {
    let personsTableData = {
        title: "Lista persoane",
        columns: [
            'Nr crt',
            'Nume',
            'Prenume',
            'CNP',
            'Tip Document Identitate',
            'Serie',
            'Numar',
            'Eliberat de',
            'Data eliberarii',
            'Localitatea',
            'Strada',
            'Nr strada',
            'Bloc',
            'Scara',
            'Nr ap',
            'Judet',
            'Sector',
            'Nr telefon',
            'Actions'
        ]
    }
    try {
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/persoane';
        let response = await Persoana.getAllPersons(apiUrl);
        let bodyData = await response.json();
        personsTableData.rows = bodyData;
        return personsTableData;
    } catch (err) {
        promptInfoMessage("Datele nu pot fi afisate.Eroare de retea sau server!")
    }
} 