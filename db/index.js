const mysql = require('mysql')
const mysqlPass = require('../mysql.config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: `${mysqlPass}`,
  database: 'rankermvp'
});

module.exports = connection;