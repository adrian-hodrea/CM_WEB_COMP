import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { getPersonsTableData } from '../components/data/getPersonsTableData.js';
import { DisplayTable } from '../components/DisplayTable/DisplayTable.js';

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let personsContainer = document.getElementById('tableContainer');
    let displayPersonsTableData = await getPersonsTableData();
    let displayPersonsTable = new DisplayTable(displayPersonsTableData);
    personsContainer.appendChild(displayPersonsTable);
}

