const express = require('express');
const router = new express.Router();
const cors = require('cors');

const root = require('../controllers/root.js');
const personCtrl = require('../controllers/personCtrl.js');
const childCtrl = require('../controllers/childCtrl.js');
const casCtrl = require('../controllers/casCtrl.js');
const contractCasCtrl = require('../controllers/contractCasCtrl.js');
const concediuMedicalCtrl = require('../controllers/concediuMedicalCtrl.js');
const codIndemnizatieCtrl = require('../controllers/codIndemnizatieCtrl.js');
const cmStatusCtrl = require('../controllers/cmStatusCtrl.js');
const medicCtrl = require('../controllers/medicCtrl.js');


router.route('/')
  .get(root.get);

/* rute Persoane */
router.route('/persoane')
  .post((req, res) => personCtrl.insert(req.body, res))
  .options(cors());

router.route('/persoane')
  .get(personCtrl.select)
  .options(cors());

router.route('/persoane/chooseList')
  .get(personCtrl.selectChooseList)
  .options(cors());

/* rute Copii */
router.route('/copii')
  .post((req, res) => childCtrl.insert(req.body, res))
  .options(cors());

router.route('/copii')
  .get(childCtrl.select)
  .options(cors());

router.route('/copii/chooseList')
  .get(childCtrl.selectChooseList)
  .options(cors());

/* rute Case de Sanatate */
router.route('/case_de_sanatate')
  .post((req, res) => casCtrl.insert(req.body, res))
  .options(cors());

router.route('/case_de_sanatate')
  .get(casCtrl.select)
  .options(cors());

router.route('/case_de_sanatate/chooseList')
  .get(casCtrl.selectChooseList)
  .options(cors());

/* rute Contracte CAS */
router.route('/contracte_concedii')
  .post((req, res) => contractCasCtrl.insert(req.body, res))
  .options(cors());

router.route('/contracte_concedii')
  .get(contractCasCtrl.select)
  .options(cors());

router.route('/contracte_concedii/chooseList')
  .get(contractCasCtrl.selectChooseList)
  .options(cors());

/* rute Concedii Medicale */
router.route('/concedii_medicale')
  .post((req, res) => concediuMedicalCtrl.insert(req.body, res))
  .options(cors());

router.route('/concedii_medicale')
  .get(concediuMedicalCtrl.select)
  .options(cors());

router.route('/concedii_medicale/chooseList')
  .get(concediuMedicalCtrl.selectChooseList)
  .options(cors());

/* rute Coduri Indemnizatie */
router.route('/coduri_indemnizatie')
  .post((req, res) => codIndemnizatieCtrl.insert(req.body, res))
  .options(cors());

router.route('/coduri_indemnizatie')
  .get(codIndemnizatieCtrl.select)
  .options(cors());

router.route('/coduri_indemnizatie/chooseList')
  .get(codIndemnizatieCtrl.selectChooseList)
  .options(cors());

/* rute Statusuri Concediu Medical */
router.route('/cm_statuses')
  .post((req, res) => cmStatusCtrl.insert(req.body, res))
  .options(cors());

router.route('/cm_statuses')
  .get(cmStatusCtrl.select)
  .options(cors());

router.route('/cm_statuses/chooseList')
  .get(cmStatusCtrl.selectChooseList)
  .options(cors());

/* rute Medic */
router.route('/medici')
  .post((req, res) => medicCtrl.insert(req.body, res))
  .options(cors());

router.route('/medici')
  .get(medicCtrl.select)
  .options(cors());

router.route('/medici/chooseList')
  .get(medicCtrl.selectChooseList)
  .options(cors());



module.exports = router;