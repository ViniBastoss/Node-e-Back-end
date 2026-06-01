var pessoa = require("./commons/pessoa");
var soma =require("./commons/soma")
var imposto = require("./commons/Calculoimposto")
vinicius = pessoa();

//console.log(JSON.stringify(vinicius))
//console.log(soma(2,2))

console.log("valor do produto com imposto: " + imposto.adicionar(10));
console.log("")