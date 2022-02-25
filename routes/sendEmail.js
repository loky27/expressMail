var express = require('express');
var router = express.Router();
var mail = require('../src/mail');
var sendMail=mail.main; 
/* GET users listing. */
router.post('/', function(req, res, next) {
  
  const {nane,lastName,email,message}=req.body;
  
  var mentorito={
    "name":nane,
    "lastName":lastName,
    "email":'mentoritosno.1@gmail.com',
    "message":"El comentario:"+message+"\n\n\n Su email es: "+email,
    "subject":"mensaje de "+nane+" "+lastName+" desde la pagina",
    "title":"opinion de "+nane+" "+lastName
  };
  
    let respuesta={
    "name":nane,
    "lastName":lastName,
    "email":email,
    "message":"Tu opinion es muy importante para el equipo de mentoritos",
    "subject":"Equipo de mentoritos",
    "title":"Muchas gracias "+nane+" "+lastName
  };
  
  sendMail(mentorito,res);
  sendMail(respuesta,res);

  

});

module.exports = router;
