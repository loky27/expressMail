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
  if(info.email){
       
    var text =contenHtml(info)
    
    var mailOptions = {
      from: 'mentoritosno.1@gmail.com',
      to: `${info.email}`,
      subject: info.subject,
      html:text
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.send(error);
      } else {
        res.send('Email enviado: ' + info.response);
        
      }
    });
    
  }else{
      
    var mailOptions = {
      from: 'mentoritosno.1@gmail.com',
      to: ``,
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(error.status || 400);
        res.send("un campo se encuentra vacio");
      } else {
        res.send('Email enviado: ' + info.response);
        
      }
    });
    
    
  }
}


module.exports = {main:main}

