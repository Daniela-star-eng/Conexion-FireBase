var a = require("./variable");
var objeto=require("./variable2.js+");
var {b,c}=require("./variable2.js+");//desestructurar
var be = require("./variable2.js+").b;
var d = require("./variable3").d;  
console.log(a); 
console.log(objeto); //imprime variables de b y c. Si se quiere imprimir solo el de uno se utiliza objeto.<<la variable>>
console.log(c); 
//desestructurar. Para poder mandar a llamar solo a c

console.log(be); 
console.log(d); 