const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'villes_fr'
});


connection.connect();

connection.query('SELECT * FROM departement', function (error, results, fields) {
    if (error) throw error;
    router.get("/", async (req, res, next) => {
        try {
          res.json(results);
        } catch (err) {
          next(err);
        }
      });
});

connection.end();

module.exports = router;
