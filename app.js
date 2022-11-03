const express = require('express'),
port = process.env.PORT || 3000,
bodyParser = require('body-parser'),
routes = require('./api/routes/routes'),
mysql = require('./api/infrastructures/mysql-driver');
global.config = require('./config.js');

if (process.env.ENV === 'TESTING'){
    global.config = require('./tests/config.js');
}

global.dbConn = mysql.createConnection()

app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
app.listen(port);

console.log('ZujuDigital RESTful API server started on: ' + port);
