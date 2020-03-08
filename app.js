let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'samplesharktank',
    insecureAuth : true
});

let sql = `SELECT * FROM company WHERE industry_id=? and entrepreneur_gender_id=?`;
connection.query(sql, [4,1], (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});
 
connection.end();