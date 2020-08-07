import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { getCasTableData } from '../components/data/getCasTableData.js';
import { DisplayTable } from '../components/DisplayTable/DisplayTable.js';

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let casContainer = document.getElementById('tableContainer');
    let displayCasTableData = await getCasTableData();
    let displayCasTable = new DisplayTable(displayCasTableData);
    casContainer.appendChild(displayCasTable);
}

