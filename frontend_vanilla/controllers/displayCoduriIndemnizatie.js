import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { getCoduriIndemnizatieTableData } from '../components/data/getCoduriIndemnizatieTableData.js';
import { DisplayTable } from '../components/DisplayTable/DisplayTable.js';

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let coduriIndemnizatieContainer = document.getElementById('tableContainer');
    let displayCoduriIndemnizatieTableData = await getCoduriIndemnizatieTableData();
    let displayCoduriIndemnizatieTable = new DisplayTable(displayCoduriIndemnizatieTableData);
    coduriIndemnizatieContainer.appendChild(displayCoduriIndemnizatieTable);
}

