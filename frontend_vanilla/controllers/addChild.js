import { PageHeader } from '../components/PageHeader/PageHeader.js';
import { addChildFormData } from '../components/data/addChildFormData.js';
import { Form } from '../components/Form/Form.js';
import { addChildToDBRequest } from '../../controllers/requests/addChildToDBRequest.js'


document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {
    let formContainer = document.getElementById('formContainer');
    let addChildForm = new Form(addChildFormData, addChildToDBRequest);
    formContainer.appendChild(addChildForm);
}

  