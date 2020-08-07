const database = require('../services/database.js');

async function insert(bodyData) {
	var { casFk, persFk, nrCtr, dataSemnarii, dataInceput, dataSfarsit} = bodyData;

	const addContracteCasQuery = 
		`       INSERT INTO contracte_concedii 
	(casFk, persFk, nrCtr, dataSemnarii, dataInceput, dataSfarsit) 
			VALUES 
	(${casFk}, ${persFk}, '${nrCtr}', '${dataSemnarii}', '${dataInceput}', '${dataSfarsit}')`;
	
	const result = await database.executeDbRequest(addContracteCasQuery);
	return result;
}

module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select() {
	const selectContracteCasQuery = 
	`SELECT 
	CONCAT(nume, ' ', prenume) AS Asigurat, 
	denumire AS 'Denumire CAS', 
	nrCtr as 'Numar Contract',
	dataSemnarii as 'Data Semnarii Contract',
	dataInceput as 'Data Inceput',
	dataSfarsit as 'Data Sfarsit' 
	FROM contracte_concedii, persoane, case_de_sanatate
	WHERE contracte_concedii.casFk = case_de_sanatate.cas
	AND contracte_concedii.persFk= persoane.pers`;
	const contracteCas = await database.executeDbRequest(selectContracteCasQuery);
	return contracteCas;
}

module.exports.select = select;

/*   -------------- Select persons ChooseList  -----------  */

async function selectChooseList() {
	const selectContracteCasQuery = 
	`SELECT ctr AS value, CONCAT(nrCtr, ' ', dataSemnarii) AS title FROM contracte_concedii`;
	const contracte = await database.executeDbRequest(selectContracteCasQuery);
	return contracte;
}

module.exports.selectChooseList = selectChooseList;
