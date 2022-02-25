//Requerimos el paquete
var nodemailer = require('nodemailer');
const pug = require('pug');

function template(info){
  // Compile the source code
const compiledFunction = pug.compileFile('./views/mail.pug');

// Render a set of data
const text=compiledFunction({
  name:info.name,
  lastName:info.lastName,
  message:info.message
})
return text


}


module.exports = {template:template}



