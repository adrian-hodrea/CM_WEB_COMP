import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { addContractCasFormData } from '../components/data/addContractCasFormData.js';
import { Form } from '../components/Form/Form.js';
import { addContractCasToDBRequest } from '../../controllers/requests/addContractCasToDBRequest.js'


document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let formContainer = document.getElementById('formContainer');
    let addContractCasForm = new Form(addContractCasFormData, addContractCasToDBRequest);
    formContainer.appendChild(addContractCasForm);
}

  