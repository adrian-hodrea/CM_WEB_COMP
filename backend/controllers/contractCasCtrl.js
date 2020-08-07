const contractCasDBApi = require('../db_apis/contractCasDBApi.js');

async function insert(bodyData, res) {
  let insertMsg;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  try {
    const result = await contractCasDBApi.insert(bodyData);
    insertMsg = {
      "message": "Contractul CAS a fost adaugat cu succes in baza de date"
    }
    res.status(200).json(insertMsg);
  }
  catch (err) {
    if (err.errno == 1062) {
      insertMsg = {
        "message": "Contractul CAS cu acest numar exista deja in sistem"
      }
      res.status(400).json(insertMsg);
    } else {
      insertMsg = {
        "message": "A aparut o problema, Contractul CAS NU a fost adaugata in baza de date"
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
    const contracteCas = await contractCasDBApi.select();
    res.status(200).json(contracteCas)
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

/*   -------------- Select Contracte CAS ChooseList  -----------  */

async function selectChooseList(req,res) {
  let selectMsg;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  try {
    const contracteCasChooseList = await contractCasDBApi.selectChooseList();
    res.status(200).json(contracteCasChooseList)
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
