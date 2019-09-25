const mysql = require('mysql')
const mysqlPass = require('../mysql.config');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: `${mysqlPass}`,
  database: 'my_db'
})

connection.connect()

module.exports = connection;