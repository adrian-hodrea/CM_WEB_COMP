import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { getContracteCasTableData } from '../components/data/getContracteCasTableData.js';
import { DisplayTable } from '../components/DisplayTable/DisplayTable.js';

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let contracteCasContainer = document.getElementById('tableContainer');
    let displayContracteCasTableData = await getContracteCasTableData();
    let displayContracteCasTable = new DisplayTable(displayContracteCasTableData);
    contracteCasContainer.appendChild(displayContracteCasTable);
}

