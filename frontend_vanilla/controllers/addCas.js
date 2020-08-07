import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { addCasFormData } from '../components/data/addCasFormData.js';
import { Form } from '../components/Form/Form.js';
import { addCasToDBRequest } from '../../controllers/requests/addCasToDBRequest.js'


document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let formContainer = document.getElementById('formContainer');
    let addCasForm = new Form(addCasFormData, addCasToDBRequest);
    formContainer.appendChild(addCasForm);
}

  