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
    db.query(`SELECT * from contestants;`,
    (err, rows, fields) => {
        if(err) res.status(404).send(err);
        res.status(200).send(rows);
    });
});

app.put('/updateLikes', (req, res) => {

});

app.listen(port, () => console.log(`listening from port: ${port}`));