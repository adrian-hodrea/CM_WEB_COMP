import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { getChildrenTableData } from '../components/data/getChildrenTableData.js';
import { DisplayTable } from '../components/DisplayTable/DisplayTable.js';

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let childrenContainer = document.getElementById('tableContainer');
    let displayChildrenTableData = await getChildrenTableData();
    let displayChildrenTable = new DisplayTable(displayChildrenTableData);
    childrenContainer.appendChild(displayChildrenTable);
}

