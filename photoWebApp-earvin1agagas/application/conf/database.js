const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host:"localhost",
    user:"photoapp",
    password:"6969",
    database:"csc317db",
    connectionLimit: 50,
    waitForConnection: true,
    debug: false,
});

module.exports = pool;