const personDBApi = require('../db_apis/personDBApi.js');

async function insert(bodyData, res) {
  let insertMsg;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  try {
    const result = await personDBApi.insert(bodyData);
    insertMsg = {
      "message": "Persoana a fost adaugata cu succes in baza de date"
    }
    res.status(200).json(insertMsg);
  }
  catch (err) {
    if (err.errno == 1062) {
      insertMsg = {
        "message": "Persoana cu acest CNP exista deja in sistem"
      }
      res.status(400).json(insertMsg);
    } else {
      insertMsg = {
        "message": "A aparut o problema, persoana NU a fost adaugata in baza de date"
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
    const persons = await personDBApi.select();
    res.status(200).json(persons)
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
    const personsChooseList = await personDBApi.selectChooseList();
    res.status(200).json(personsChooseList)
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
