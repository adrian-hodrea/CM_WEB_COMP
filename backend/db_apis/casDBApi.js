const database = require('../services/database.js');

async function insert(bodyData) {
	var { cui, denumire, adresa, iban } = bodyData;

	const addCasQuery = 
		`       INSERT INTO case_de_sanatate 
	(cui, denumire, adresa, iban) 
			VALUES 
	('${cui}', '${denumire}', '${adresa}', '${iban}')`;
	
	const result = await database.executeDbRequest(addCasQuery);
	return result;
}

module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select() {
	const selectCasQuery = 
	`SELECT cui, denumire, adresa, iban
	FROM case_de_sanatate`;
	const caseSanatate = await database.executeDbRequest(selectCasQuery);
	return caseSanatate;
}

module.exports.select = select;

/*   -------------- Select persons ChooseList  -----------  */

async function selectChooseList() {
	const selectCasQuery = 
	`SELECT cas AS value, denumire AS title FROM case_de_sanatate`;
	const caseSanatate = await database.executeDbRequest(selectCasQuery);
	return caseSanatate;
}

module.exports.selectChooseList = selectChooseList;
