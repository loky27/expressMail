var express = require('express');
var router = express.Router();
var mail = require('../src/prueva');
var sendMail=mail.main; 
/* GET users listing. */
router.post('/', function(req, res, next) {
  
  const {name,lastName,email,message}=req.body;
  
  var mentorito={
    "name":name,
    "lastName":lastName,
    "email":'mentoritosno.1@gmail.com',
    "message":message,
    "subject":"mensaje de"+name+" "+lastName+" desde la pagina"
  };
  
    let respuesta={
    "name":name,
    "lastName":lastName,
    "email":email,
    "message":``,
    "subject":"Equipo de mentoritos"
  
  };
  
  //sendMail(mentorito,res);
  sendMail(respuesta,res);

  

});

module.exports = router;
