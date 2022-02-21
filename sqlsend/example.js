var express = require('express');
var router = express.Router();
var mysql = require('mysql')

//mysql://b73bba9b97dc33:53dc9a65@us-cdbr-east-05.cleardb.net/heroku_ce1817d078fb728?reconnect=true
var connection = mysql.createConnection(
  {
    host:'us-cdbr-east-05.cleardb.net',
    user:'b73bba9b97dc33',
    password:'53dc9a65',
    database:'heroku_ce1817d078fb728'
  }
)


// all usuarios
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
  
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Not result');
      }
    });
  });
  
  router.post('/', (req, res) => {
    const sql = 'INSERT INTO usuarios SET ?';
  
    const customerObj = {
      name: req.body.name,
      lastName: req.body.lastName
    };
  
    connection.query(sql, customerObj, error => {
      if (error) throw error;
      res.send('Customer created!');
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM usuarios WHERE idusuarios = ${id}`;
    connection.query(sql, (error, result) => {
      if (error) throw error;
  
      if (result.length > 0) {
        res.json(result);
      } else {
        res.send('Not result');
      }
    });
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const sql = `UPDATE usuarios SET name = '${name}'WHERE idusuarios =${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Customer updated!');
    });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM usuarios WHERE idusuarios = ${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Delete customer');
    });
  });
  
  module.exports = router;