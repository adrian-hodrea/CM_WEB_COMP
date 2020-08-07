const database = require('../services/database.js');

async function insert(bodyData) {
	var { cnp, nume, prenume, tipCI, seriaCI, numarCI, eliberatDeCI, dataEliberariiCI,
		localitatea, strada, nrStrada, bloc, scara, nrApartament,
		judet, sector, telefon } = bodyData;

	const addPersonQuery = 
		`       INSERT INTO persoane 
	(cnp, nume, prenume, tipCI, seriaCI, numarCI, eliberatDeCI, dataEliberariiCI, 
		localitatea, strada, nrStrada, bloc, scara, nrApartament, 
		judet, sector, telefon) 
			VALUES 
	('${cnp}', '${nume}', '${prenume}', '${tipCI}', '${seriaCI}', '${numarCI}', '${eliberatDeCI}', '${dataEliberariiCI}',
	'${localitatea}', '${strada}', '${nrStrada}', '${bloc}', '${scara}', '${nrApartament}', 
	'${judet}', '${sector}', '${telefon}')`;
	
	const result = await database.executeDbRequest(addPersonQuery);
	return result;
}

module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select() {
	const selectPersonsQuery = 
	`SELECT nume, prenume, cnp, tipCI, seriaCI, numarCI, eliberatDeCI, dataEliberariiCI, 
	localitatea, strada, nrStrada, bloc, scara, nrApartament, judet, sector, telefon
	FROM persoane`;
	const persons = await database.executeDbRequest(selectPersonsQuery);
	return persons;
}

module.exports.select = select;

/*   -------------- Select persons ChooseList  -----------  */

async function selectChooseList() {
	const selectPersonsQuery = 
	`SELECT pers AS value, CONCAT(nume, ' ', prenume) AS title FROM persoane`;
	const persons = await database.executeDbRequest(selectPersonsQuery);
	return persons;
}

module.exports.selectChooseList = selectChooseList;
