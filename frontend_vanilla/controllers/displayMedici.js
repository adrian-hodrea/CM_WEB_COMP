import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { getMediciTableData } from '../components/data/getMediciTableData.js';
import { DisplayTable } from '../components/DisplayTable/DisplayTable.js';

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let mediciContainer = document.getElementById('tableContainer');
    let displayMediciTableData = await getMediciTableData();
    let displayMediciTable = new DisplayTable(displayMediciTableData);
    mediciContainer.appendChild(displayMediciTable);
}

