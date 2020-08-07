import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { addMedicFormData } from '../components/data/addMedicFormData.js';
import { Form } from '../components/Form/Form.js';
import { addMedicToDBRequest } from '../../controllers/requests/addMedicToDBRequest.js'

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

function onHtmlLoaded() {
    let formContainer = document.getElementById('formContainer');
    let addMedicForm = new Form(addMedicFormData, addMedicToDBRequest);
    formContainer.appendChild(addMedicForm);
}

