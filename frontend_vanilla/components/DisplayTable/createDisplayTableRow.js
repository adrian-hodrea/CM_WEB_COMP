export const createDisplayTableRow = (obj, index) => {
    document.oncontextmenu = function() {
        return false;
      }
    var tr = document.createElement("tr");
    tr.setAttribute("data-editMode","false");
    var td = document.createElement("td");  // nr crt
    td.innerText = index + 1;
    tr.appendChild(td);

    const tableRowData = Object.values(obj);
    tableRowData.forEach( data => {
        var td = document.createElement("td");  // nr crt
        td.innerText = data;    
        tr.appendChild(td);
    })

    var td = document.createElement("td");  
    td.innerHTML = `
        <span title="Editeaza" id="editBtn" class="editRowBtn">
            <i class="fas fa-pen"></i>
            <span>Edit</span>
        </span>
        <span title="Sterge" id="deleteBtn" class="deleteRowBtn">
            <i class="fas fa-trash-alt"></i>  
            <span>Delete</span>
        </span>
        <span title="Save" id="saveChangesBtn" class="saveChangesBtn">
            <span>Save</span>
        </span>
        `
    tr.addEventListener('contextmenu', onRightClick(obj));   
    tr.appendChild(td);

    return tr;

    function onRightClick(obj) {
        return function () {
            alert(`Contextual menu pentru ${obj.nume} ${obj.prenume}`);
        }
    }
} 

