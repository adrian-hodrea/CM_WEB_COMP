const medicDBApi = require('../db_apis/medicDBApi.js');

async function insert(bodyData, res) {
  let insertMsg;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  try {
    const result = await medicDBApi.insert(bodyData);
    insertMsg = {
      "message": "Medicul a fost adaugat cu succes in baza de date"
    }
    res.status(200).json(insertMsg);
  }
  catch (err) {
    if (err.errno == 1062) {
      insertMsg = {
        "message": "Medicul cu acest ID exista deja in sistem"
      }
      res.status(400).json(insertMsg);
    } else {
      insertMsg = {
        "message": "A aparut o problema, medicul NU a fost adaugata in baza de date"
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
    const medici = await medicDBApi.select();
    res.status(200).json(medici)
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

/*   -------------- Select persons ChooseList  -----------  */

async function selectChooseList(req,res) {
  let selectMsg;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  try {
    const mediciChooseList = await medicDBApi.selectChooseList();
    res.status(200).json(mediciChooseList)
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
