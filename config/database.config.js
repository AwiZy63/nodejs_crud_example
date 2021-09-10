'use strict';

const mysql = require('mysql');
const config = require('./../config.json');
const database = config.database


const dbConn = mysql.createConnection({
    host: database.hostname,
    user: database.user,
    password: database.password,
    database: database.name
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Connection effectuée avec base de données !");
});

module.exports = dbConn;