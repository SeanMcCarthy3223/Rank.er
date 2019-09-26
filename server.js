const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/index');
const bodyParser = require('body-parser');

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.connect((err) => {
    if(err) console.error(err);

    console.log('MySQL is connected');
});

app.get('/allEmployees', (req, res) => {
    db.query('SELECT employees.id, employees.first_name, employees.last_name, employees.photo, companies.name, employees.up_votes, employees.total_votes FROM employees, companies WHERE employees.company_id = companies.id;',
    (err, rows, fields) => {
        if(err) res.status(404).send(err);       
        res.status(200).send(rows);
    });
});

app.listen(port, () => console.log(`listening from port: ${port}`));
