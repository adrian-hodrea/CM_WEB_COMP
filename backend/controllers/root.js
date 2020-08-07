const path = require('path');

async function getVanilla(req, res, next) {
  try {
       //res.status(200).json("Root of Web App reached");
 	res.sendFile(path.join(__dirname,'../../frontend_vanilla/pages','index.html'));
  } 
	catch (err) {
    next(err);
  }
}

async function getAngular(req, res, next) {
  try {
       //res.status(200).json("Root of Web App reached");
 	res.sendFile(path.join(__dirname,'../../client/src','index.html'));
  } 
	catch (err) {
    next(err);
  }
}

 
module.exports.getVanilla = getVanilla;
module.exports.getAngular = getAngular;