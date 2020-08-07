import { createDisplayTableRow } from './createDisplayTableRow.js';

export class DisplayTable extends HTMLElement {
    constructor(displayTableData) {
        super();
        let { title, columns, rows } = displayTableData;
        // this.innerHTML = `
        //     <caption>${title}</caption>
        //     <tbody id="personsContainerBody" class="display_table_body">
        //         <tr id="table_head" class="table_head"> 
        //         </tr>    
        //     </tbody>
        // `
        let table = document.createElement('table');
        table.classList.add('display_table');
        let caption = document.createElement('caption');
        caption.innerText = title;
        let tbody = document.createElement('tbody');
        tbody.id = "displayTableBody";
        tbody.classList.add('display_table_body');
        let tableHead = document.createElement('tr');
        tableHead.id = 'tableHead',
        tableHead.classList.add('table_head');
        tbody.appendChild(tableHead);
        table.appendChild(caption);
        table.appendChild(tbody);
        this.appendChild(table);

        let tableHeader = this.querySelector('#tableHead');
        columns.forEach(element => {
            let columnTitle = document.createElement("th");
            columnTitle.innerText = element;
            tableHeader.appendChild(columnTitle);
        });

        /* ---- insert rows  ---- */
        rows.forEach((element, index) => {
            let tr = createDisplayTableRow(element, index);
            tbody.appendChild(tr);
        });
    }
}

window.customElements.define('display-table', DisplayTable);