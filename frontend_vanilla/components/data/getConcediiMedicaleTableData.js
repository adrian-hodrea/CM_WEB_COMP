import { ConcediuMedical } from '../../models/ConcediuMedical.js';
import { promptInfoMessage } from '../../ownModules/infoMessage.js';
import { getMonthDisplayFormat } from '../../ownModules/datesHelperFunctions.js';

export async function getConcediiMedicaleTableData() {
    let concediiMedicaleTableData = {
        title: "Lista Concedii Medicale",
        columns: [
            'Nr crt',
            'Anul',
            'Luna',
            'Serie si numar CM',
            'Data acordarii',
            'Initial/Continuare',
            'De la data',
            'La data',
            'Nr zile calend', //??? Trebuie calculat de sistem
            'Cod Indemnizatie',
            'Procent',
            'Tip concediu medical',
            'Serie si numar CM initial',
            'Copil',
            'Contract',
            'Asigurat',
            'Status',
            'Scan',
            'Actions'
        ]
    }
    try {
        const root = window.localStorage.getItem("root");
        const apiUrl = root + '/concedii_medicale';
        let response = await ConcediuMedical.getAllConcediiMedicale(apiUrl);
        let bodyData = await response.json();
        concediiMedicaleTableData.rows = bodyData;
        return concediiMedicaleTableData;
    } catch (err) {
        promptInfoMessage("Datele nu pot fi afisate.Eroare de retea sau server!")
    }
} 