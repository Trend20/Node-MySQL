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

// performing queries
// GETTING DATA
connection.query('SELECT * FROM users', (err, rows) => {
    console.log('Data received');
    console.log(rows);
});
// loop over the data received
// rows.forEach((row) => {
//     console.log(`${row.name} ${row.location}`);
// })

// CREATING DATA
const anotherUser = { id: 4, name: 'Jeff', age: 30, location: 'Zambia ' }
connection.query('INSERT  INTO users SET ?', anotherUser, (err, rows) => {
    console.log('User added');
    console.log(anotherUser);
});

// UPDATING DATA
connection.query('UPDATE users SET locatio = ? WHERE id = ?', ['North', 5],
    (err, result) => {
        console.log('Updated');
    })

// DELETING DATA
connection.query('DELETE FROM users WHERE id = ?', [5], (err, result) => {
    if (err) throw err
    console.log('Deleted');
})


app.listen(3000, () => {
    console.log('Connected');
});