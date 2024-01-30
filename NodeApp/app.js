const express = require('express');
const mysql = require('mysql');
const app = express();

require('dotenv').config();

// Conexão com o MySQL
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Rota para buscar capitais
app.get('/capitais', (req, res) => {
  connection.query('SELECT * FROM Nome', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
