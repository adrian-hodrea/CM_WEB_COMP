const concediuMedicalDBApi = require('../db_apis/concediuMedicalDBApi.js');

async function insert(bodyData, res) {
  console.log("Am ajuns la Controller")
  let insertMsg;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  try {
    const result = await concediuMedicalDBApi.insert(bodyData);
    insertMsg = {
      "message": "Concediul Medical a fost adaugat cu succes in baza de date"
    }
    res.status(200).json(insertMsg);
  }
  catch (err) {
    if (err.errno == 1062) {
      insertMsg = {
        "message": "Concediul Medical cu acest numar exista deja in sistem"
      }
      res.status(400).json(insertMsg);
    } else {
      insertMsg = {
        "message": "A aparut o problema, Concediul Medical NU a fost adaugata in baza de date"
      }
      res.status(500).json(insertMsg);
    }
  }
}

module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select(req,res) {
  let selectMsg;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  try {
    const concediiMedicale = await concediuMedicalDBApi.select();
    res.status(200).json(concediiMedicale)
  }
  catch (err) {
    selectMsg = {
      "message": "A aparut o problema, datele nu pot fi afisate"
    }
    console.log(err);
    res.status(500).json(selectMsg);
  }
}

module.exports.select = select;

/*   -------------- Select Concedii Medicale ChooseList  -----------  */

async function selectChooseList(req,res) {
  let selectMsg;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  try {
    const concediiMedicaleChooseList = await concediuMedicalDBApi.selectChooseList();
    res.status(200).json(concediiMedicaleChooseList)
  }
  catch (err) {
    selectMsg = {
      "message": "A aparut o problema, datele nu pot fi afisate"
    }
    console.log(err);
    res.status(500).json(selectMsg);
  }
}

module.exports.selectChooseList = selectChooseList;
