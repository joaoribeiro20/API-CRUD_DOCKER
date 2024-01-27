const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 8088;

const connection = mysql.createConnection({
  host: 'teste-db',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

app.get('/a', (req, res) => {
  console.log("api base")
  res.json('porrrrraaaa bbbn!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



   