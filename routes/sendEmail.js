var express = require('express');
var router = express.Router();
var mail = require('../src/prueva');
var sendMail=mail.main; 
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  const {name,lastName,email,message}=req.body;
  
  var mentorito={
    "name":name,
    "lastName":lastName,
    "email":'mentoritosno.1@gmail.com',
    "message":message};
  
    let respuesta={
    "name":name,
    "lastName":lastName,
    "email":email,
    "message":`gracias por tu comentario`};
  
  sendMail(mentorito);
  sendMail(respuesta);

  res.send('received');

});

module.exports = router;
