import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { addCodIndemnizatieFormData } from '../components/data/addCodIndemnizatieFormData.js';
import { Form } from '../components/Form/Form.js';
import { addCodIndemnizatieToDBRequest } from '../../controllers/requests/addCodIndemnizatieToDBRequest.js'


document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let formContainer = document.getElementById('formContainer');
    let addCodIndemnizatieForm = new Form(addCodIndemnizatieFormData, addCodIndemnizatieToDBRequest);
    formContainer.appendChild(addCodIndemnizatieForm);
}

  