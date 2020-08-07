const http = require('http');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser');

const webServerConfig = require('../config/web-server.js');
const router = require('./router.js');
const database = require('./database.js');
 
let httpServer;
 
function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);
   // app.use(morgan('combined'));
    app.use(bodyParser.json());
    app.use('/', router);
	
    app.use(cors());

    app.use('/controllers',express.static('../frontend/controllers'));
    app.use('/assets',express.static('../frontend/assets'));
    app.use('/components',express.static('../frontend/components'));
    app.use('/ownmodules',express.static('../frontend/ownmodules'));
    app.use('/models',express.static('../frontend/models'));

    app.use('/frontend',express.static('../frontend'));

  
   
    httpServer.listen(webServerConfig.port)
      .on('listening', () => {
        console.log(`Web server listening on localhost:${webServerConfig.port}`);
 
        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}
 
module.exports.initialize = initialize;

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
 
      resolve();
    });
  });
}
 
module.exports.close = close;