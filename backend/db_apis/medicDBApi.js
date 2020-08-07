const database = require('../services/database.js');

async function insert(bodyData) {
	var { id, nume, prenume } = bodyData;

	const addMedicQuery = 
		`       INSERT INTO medici 
	(id, nume, prenume) 
			VALUES 
	('${id}', '${nume}', '${prenume}')`;
	
	const result = await database.executeDbRequest(addMedicQuery);
	return result;
}

module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select() {
	const selectMediciQuery = 
	`SELECT id, nume, prenume FROM medici`;
	const medici = await database.executeDbRequest(selectMediciQuery);
	return medici;
}

module.exports.select = select;

/*   -------------- Select persons ChooseList  -----------  */

async function selectChooseList() {
	const selectMediciQuery = 
	`SELECT medic AS value, CONCAT(nume, ' ', prenume) AS title FROM medici`;
	const medici = await database.executeDbRequest(selectMediciQuery);
	return medici;
}

module.exports.selectChooseList = selectChooseList;
