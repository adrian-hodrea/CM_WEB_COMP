import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { addCmStatusFormData } from '../components/data/addCmStatusFormData.js';
import { Form } from '../components/Form/Form.js';
import { addCmStatusToDBRequest } from '../../controllers/requests/addCmStatusToDBRequest.js'


document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let formContainer = document.getElementById('formContainer');
    let addCmStatusForm = new Form(addCmStatusFormData, addCmStatusToDBRequest);
    formContainer.appendChild(addCmStatusForm);
}

  