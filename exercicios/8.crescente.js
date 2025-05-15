const prompt = require('prompt-sync')()

let valores = Array()

let valor1 = (prompt("Informe o valor 1: "))
let valor2 = (prompt("Informe o valor 2: "))

valores[0] = valor1
valores[1] = valor2


console.log(valores.sort((a, b) => a - b))