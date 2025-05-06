const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Insira o primeiro valor: "))
let valor2 = Number(prompt("Insira o segundo valor: "))
let operacao = prompt("Informe a operação desejada (+, -, /, *): ")
let resultado = 0

switch (operacao) {
    case "+":
        resultado = valor1+valor2
        console.log("Resultado: ", resultado);
        break;
    case "-":
        resultado = valor1-valor2
        console.log("Resultado: ", resultado);
        break;
    case "*":
        resultado = valor1*valor2
        console.log("Resultado: ", resultado);
        break;
    case "/":
        resultado = valor1/valor2
        console.log("Resultado: ", resultado);
        break;
}