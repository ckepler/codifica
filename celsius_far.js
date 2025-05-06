const prompt = require('prompt-sync')()

let celsius = Number(prompt("Informe a temperatura em Celsius: "))
let calculo = 0
calculo = (celsius * 9/5) + 32


console.log("A temperatura em Graus Fahrenheit é: ",calculo)

