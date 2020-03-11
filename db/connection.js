let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'samplesharktank',
    insecureAuth : true
});

module.exports = connection;