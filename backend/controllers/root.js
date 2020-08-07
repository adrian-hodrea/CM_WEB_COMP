const path = require('path');

async function get(req, res, next) {
  try {
       //res.status(200).json("Root of Web App reached");
 	res.sendFile(path.join(__dirname,'../../frontend/pages','index.html'));
  } 
	catch (err) {
    next(err);
  }
}
 
module.exports.get = get;