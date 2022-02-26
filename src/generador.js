//Requerimos el paquete
const pug = require('pug');

function template(info){
  // Compile the source code
const compiledFunction = pug.compileFile(info.path);

// Render a set of data
const text=compiledFunction({
 info:info                                        
})
return text


}


module.exports = {template:template}



