var express = require('express');
var router = express.Router();
var mail = require('../src/mail');
var sendMail=mail.main; 
/* POST SendMail listing. */
router.post('/', function(req, res, next) {
  
  const {nane,lastName,email,message}=req.body;
  
  let mentorito={
    "name":nane,
    "lastName":lastName,
    "email":'mentoritosno.1@gmail.com',
    "subject":"mensaje de "+nane+" "+lastName+" desde la pagina",
    "path":'./views/mail.pug',
    "title":"Opinión de "+nane+" "+lastName+".",
    "message":"El comentario: "+message+".  |\n\n\n Su email es: "+email+".",
  };
  
  sendMail(mentorito,res);
  
  let respuesta={
    "name":nane,
    "lastName":lastName,
    "email":email,
    "subject":"Equipo de mentoritos",
    "path":'./views/mail.pug',
    "title":"Muchas gracias "+nane+" "+lastName+".",
    "message":"Tu opinión es muy importante para el equipo de mentoritos.",
  };
  
  sendMail(respuesta,res);

});

module.exports = router;
