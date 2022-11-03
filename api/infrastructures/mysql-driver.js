'use strict'
const mysql = require('mysql');
let connection;

class MySqlDriver {
    createConnection(){
        connection = mysql.createConnection({
            host     :  config.MYSQLDB.host,
            user     :  config.MYSQLDB.user,
            password :  config.MYSQLDB.password,
            database :  config.MYSQLDB.database
        });
        connection.connect(function(err) {
            if (err) {
                console.log("DB ERROR: ",err)
                throw err;
            } 
        });
        return connection
    };
}
module.exports = new MySqlDriver()