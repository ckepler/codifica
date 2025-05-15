const prompt = require('prompt-sync')()

let peso = (prompt("Informe seu peso: "))
let altura = (prompt("Informe sua altura: "))
let IMC 
IMC =  peso / (altura * altura)
if (IMC <18.5) {
    console.log ("Baixo peso")
} else if (IMC >=18.5 && IMC <=24.9) {
    console.log ("Peso normal")
} else if (IMC >=25 && IMC <=29.9) {
    console.log ("Sobrepeso")
} else {
    console.log ("Obesidade")
}
