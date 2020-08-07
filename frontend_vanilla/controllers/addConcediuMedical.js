import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { addConcediuMedicalFormData } from '../components/data/addConcediuMedicalFormData.js';
import { Form } from '../components/Form/Form.js';
import { addConcediuMedicalToDBRequest } from '../../controllers/requests/addConcediuMedicalToDBRequest.js'


document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let formContainer = document.getElementById('formContainer');
    let addConcediuMedicalForm = new Form(addConcediuMedicalFormData, addConcediuMedicalToDBRequest);
    formContainer.appendChild(addConcediuMedicalForm);
}

  