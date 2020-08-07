import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { getConcediiMedicaleTableData } from '../components/data/getConcediiMedicaleTableData.js';
import { DisplayTable } from '../components/DisplayTable/DisplayTable.js';
import { getMonthDisplayFormat, getYearDisplayFormat, dateDiffInDays, formatDate } from '../../ownModules/datesHelperFunctions.js';

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let concediiMedicaleContainer = document.getElementById('tableContainer');
    let displayConcediiMedicaleTableData = await getConcediiMedicaleTableData();
    
    console.log(displayConcediiMedicaleTableData.rows);
    displayConcediiMedicaleTableData.rows.forEach(element => {
        let { dataAcordarii, deLaData, laData } = element;
        element.luna = getMonthDisplayFormat(dataAcordarii);  
        element.anul = getYearDisplayFormat(dataAcordarii); 
        element.nrZile = dateDiffInDays(deLaData, laData) + 1;
        element.dataAcordarii = formatDate(dataAcordarii);
        element.deLaData = formatDate(deLaData);
        element.laData = formatDate(laData);

    }); 


    let displayConcediiMedicaleTable = new DisplayTable(displayConcediiMedicaleTableData);
    concediiMedicaleContainer.appendChild(displayConcediiMedicaleTable);
}

