const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test2'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('The server is connected and running');
});

app.listen(3000, () => {
    console.log('Connected');
});