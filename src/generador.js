//Requerimos el paquete
const pug = require('pug');

function template(info){
  // Compile the source code
const compiledFunction = pug.compileFile('./views/mail.pug');

// Render a set of data
const text=compiledFunction({
  message:info.message,
  title:info.title
})
return text


}


module.exports = {template:template}



