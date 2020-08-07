const database = require('../services/database.js');

async function insert(bodyData) {
	var { serieCm, numarCm, ctrFk, persFk, dataAcordarii, medicFk, deLaData, laData,
		tipInitCont, codIndFk, cmInitFk, copilFk, cmStatFk} = bodyData;
	if (!cmInitFk) {           /*  Convert to null value for nullable foreign key fields to prevent DB Constraint Errors   */
		cmInitFk = null;
	};
	if (!copilFk) {
		copilFk = null;
	}

	console.log('Am ajuns la DBI Concedii medicale',bodyData);
	const addContracteCasQuery = 
		`       INSERT INTO concedii_medicale 
	    (serieCm, numarCm, ctrFk, persFk, dataAcordarii, medicFk, deLaData, laData, 
		tipInitCont, codIndFk, cmInitFk, copilFk, cmStatFk) 
			VALUES 
	('${serieCm}', '${numarCm}', ${ctrFk}, ${persFk}, '${dataAcordarii}', ${medicFk}, '${deLaData}', '${laData}',
	'${tipInitCont}', ${codIndFk}, ${cmInitFk}, ${copilFk}, ${cmStatFk})`;
	
	const result = await database.executeDbRequest(addContracteCasQuery);
	return result;
}
module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select() {
	const selectConcediiMedicaleQuery = 
	`SELECT 
	"Anul" as 'anul',
	"Luna" as 'luna', 
	CONCAT(CM.serieCm,' ',CM.numarCm) as 'serieNumarCM', 
	CM.dataAcordarii, 
	CM.tipInitCont, 
	CM.deLaData, 
	CM.laData, 
	"Nr zile" as 'nrZile',
	codIndemnizatie,
	procent, 
	descriereIndemnizatie,
	CONCAT(CMInit.serieCm,' ',CMInit.numarCm) as 'serieNumarCMInitial',
	CONCAT(copii.nume,' ',copii.prenume) as 'copil',
	CONCAT(CTR.nrCtr,' ', CTR.dataSemnarii) AS 'contract',
	CONCAT(PERS.nume,' ',PERS.prenume) as 'asigurat',
	STATUS.statName,
	"Scan"
	FROM concedii_medicale CM
		LEFT JOIN coduri_indemnizatie CIND
			ON CM.codIndFk = CIND.codInd
		LEFT JOIN copii
			ON CM.copilFk = copii.copil
		LEFT JOIN concedii_medicale CMInit
			ON CM.cmInitFk = CMInit.cm	
		JOIN contracte_concedii CTR	
			ON CM.ctrFk = CTR.ctr
		JOIN persoane PERS
			ON CM.persFk = PERS.pers
		JOIN cm_statuses STATUS
			ON CM.cmStatFk = STATUS.cmStat		
	`;
	const concediiMedicale = await database.executeDbRequest(selectConcediiMedicaleQuery);
	return concediiMedicale;
}

module.exports.select = select;

/*   -------------- Select Concedii Medicale ChooseList  -----------  */

async function selectChooseList() {
	const selectConcediiMedicaleQuery = 
	`SELECT cm AS value, CONCAT(serieCm, ' ', numarCm) AS title FROM concedii_medicale`;
	const concediiMedicale = await database.executeDbRequest(selectConcediiMedicaleQuery);
	return concediiMedicale;
}

module.exports.selectChooseList = selectChooseList;
