const database = require('../services/database.js');
/* lookup table */
async function insert(bodyData) {
	var { codIndemnizatie, descriereIndemnizatie, procent } = bodyData;

	const addContracteCasQuery = 
		`       INSERT INTO coduri_indemnizatie 
	(codIndemnizatie, descriereIndemnizatie, procent) 
			VALUES 
	('${codIndemnizatie}', '${descriereIndemnizatie}', '${procent}')`;
	
	const result = await database.executeDbRequest(addContracteCasQuery);
	return result;
}
module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select() {
	const selectCoduriIndemnizatieQuery = 
	`SELECT codIndemnizatie, descriereIndemnizatie, procent
	FROM coduri_indemnizatie`;
	const coduriIndemnizatii = await database.executeDbRequest(selectCoduriIndemnizatieQuery);
	return coduriIndemnizatii;
}

module.exports.select = select;

/*   -------------- Select Concedii Medicale ChooseList  -----------  */

async function selectChooseList() {
	const selectCoduriIndemnizatieQuery = 
	`SELECT codInd AS value, CONCAT(codIndemnizatie, ' ', descriereIndemnizatie) AS title FROM coduri_indemnizatie`;
	const coduriIndemnizatii = await database.executeDbRequest(selectCoduriIndemnizatieQuery);
	return coduriIndemnizatii;
}

module.exports.selectChooseList = selectChooseList;
