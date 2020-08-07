import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { addPersonFormData } from '../components/data/addPersonFormData.js';
import { Form } from '../components/Form/Form.js';
import { addPersonToDBRequest } from '../../controllers/requests/addPersonToDBRequest.js'

document.addEventListener('DOMContentLoaded', onHtmlLoaded);

function onHtmlLoaded() {
    let formContainer = document.getElementById('formContainer');
    let addPersonForm = new Form(addPersonFormData, addPersonToDBRequest);
    formContainer.appendChild(addPersonForm);
}

