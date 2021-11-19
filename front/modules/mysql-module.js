const mysql = require('mysql2/promise')
const connection = mysql.createPool({
  host: process.env.DB_host,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit:0
});

module.exports = { pool }