'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: process.env.database_host,
    user: process.env.database_user,
    password: process.env.database_password,
    database: process.env.database_name
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Connection effectuée avec base de données !");
});

module.exports = dbConn;