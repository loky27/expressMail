//Requerimos el paquete
var nodemailer = require('nodemailer');

function main(info){
  //Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mentoritosno.1@gmail.com',
    pass: 'qhczwtjoyqbhxtdo'
  }
});

var mensaje = `${info.message}`;

var mailOptions = {
  from: 'mentoritosno.1@gmail.com',
  to: `${info.email}`,
  subject: 'Asunto Del Correo',
  text: mensaje
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});



}
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

module.exports = {main:main}

