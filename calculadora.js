const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Insira o primeiro valor: "))
let valor2 = Number(prompt("Insira o segundo valor: "))
let operacao = prompt("Informe a operação desejada (+, -, /, *): ")
let resultado = 0

if (operacao === '+' ) {
    resultado = valor1 + valor2
} else if (operacao === '-'){
    resultado = valor1 - valor2
} else if (operacao === '*'){
    resultado = valor1 * valor2
} else if (operacao === '/'){
    if(valor2 !== 0) {
    resultado = valor1 / valor2
    } else {
        console.error("Erro: divisão por zero")
        resultado = undefined
    }
} else {
    console.log("Operação inválida!")
    resultado = undefined
}
if (resultado !== undefined) {
    console.log("Resultado: ", resultado)
}
