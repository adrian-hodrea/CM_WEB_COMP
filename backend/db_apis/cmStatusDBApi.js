const database = require('../services/database.js');
/* lookup table */
async function insert(bodyData) {
	var { statName, activeFlag, ord} = bodyData;

	const addCmStatusQuery = 
		`       INSERT INTO cm_statuses 
	(statName, activeFlag, ord) 
			VALUES 
	('${statName}', '${activeFlag}', '${ord}')`;
	
	const result = await database.executeDbRequest(addCmStatusQuery);
	return result;
}

module.exports.insert = insert;

/*   -------------- Select from database  -----------  */

async function select() {
	const selectCmStatusesQuery = 
	`SELECT statName, activeFlag, ord
	FROM cm_statuses`;
	const cmStatuses = await database.executeDbRequest(selectCmStatusesQuery);
	return cmStatuses;
}

module.exports.select = select;

/*   -------------- Select persons ChooseList  -----------  */

async function selectChooseList() {
	const selectCmStatusesQuery = 
	`SELECT cmStat AS value, statName AS title FROM cm_statuses ORDER BY ord`;
	const cmStatuses = await database.executeDbRequest(selectCmStatusesQuery);
	return cmStatuses;
}

module.exports.selectChooseList = selectChooseList;
