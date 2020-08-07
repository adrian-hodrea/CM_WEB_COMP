const database = require('../services/database.js');

async function insert(bodyData) {
	var { cnp, nume, prenume, seriaCN, numarCN, dataNasterii,
		tataFk, mamaFk } = bodyData;

	const addChildrenQuery = 
		`       INSERT INTO copii 
	(cnp, nume, prenume, seriaCN, numarCN, dataNasterii, 
		tataFk, mamaFk) 
			VALUES 
	('${cnp}', '${nume}', '${prenume}', '${seriaCN}', '${numarCN}', '${dataNasterii}',
	${tataFk}, ${mamaFk})`;
	
	const result = await database.executeDbRequest(addChildrenQuery);
	return result;
}

module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select() {
	const selectChildrenQuery = 
	`SELECT copii.nume, copii.prenume, copii.cnp, seriaCN, numarCN, dataNasterii, 
	CONCAT(tata.nume, ' ', tata.prenume) AS tata, 
	CONCAT(mama.nume, ' ', mama.prenume) AS mama 
	FROM copii, persoane tata, persoane mama
	WHERE copii.tataFk = tata.pers
	and copii.mamaFk= mama.pers`;
	const children = await database.executeDbRequest(selectChildrenQuery);
	return children;
}

module.exports.select = select;

/*   -------------- Select Copii ChooseList  -----------  */

async function selectChooseList() {
	const selectChildrenQuery = 
	`SELECT copil AS value, CONCAT(nume, ' ', prenume) AS title FROM copii`;
	const copii = await database.executeDbRequest(selectChildrenQuery);
	return copii;
}

module.exports.selectChooseList = selectChooseList;


/*   -------------- Select persons ChooseList  -----------  */

async function selectChooseList() {
	const selectChildrenQuery = 
	`SELECT copil AS value, CONCAT(nume, ' ', prenume) AS title FROM copii`;
	const copii = await database.executeDbRequest(selectChildrenQuery);
	return copii;
}

module.exports.selectChooseList = selectChooseList;

