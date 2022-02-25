//Requerimos el paquete
var nodemailer = require('nodemailer');
var template = require('./generador');
var contenHtml=template.template;

function main(info,res){
  //Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mentoritosno.1@gmail.com',
    pass: 'qhczwtjoyqbhxtdo'
  }
});

var text =contenHtml(info)


var mensaje = `${info.message}`;


var mailOptions = {
  from: 'mentoritosno.1@gmail.com',
  to: `${info.email}`,
  subject: info.subject,
  text: mensaje,
  html:text
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.send(error);
  } else {
    res.send('Email enviado: ' + info.response);
  }
});



}


module.exports = {main:main}

