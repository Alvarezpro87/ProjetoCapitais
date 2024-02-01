const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();

const dbConfig = {
  host: 'db',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig); 

  connection.connect(function(err) {             
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                     
  });                                     
                                          
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                        
    } else {                                     
      throw err;                                  
    }
  });
}

handleDisconnect();

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


