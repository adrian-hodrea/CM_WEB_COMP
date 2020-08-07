const mysql = require('mysql');
const dbConfig = require('../config/database.js');

async function initialize() {
  const pool = await mysql.createPool(dbConfig.mySqlPool);
}

module.exports.initialize = initialize;

async function close() {
  await pool.end();
}

module.exports.close = close;

function executeDbRequest(queryString) {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = await mysql.createPool(dbConfig.mySqlPool);

      pool.query(queryString, (error, results, fields) => {
        try {
          if (error) throw error;
          console.log("--------------- Linie dupa throw error", results);
          resolve(results);
        } catch (err) {
          console.log('Error from DB:', err);
          reject(err);
        }
      })
    } catch (err) {
      console.log('Am intrat pe catch din executeDbRequest:', err)
      reject(err);
    }
  }); // end of Promise
}


module.exports.executeDbRequest = executeDbRequest;