const prompt = require('prompt-sync')()


let valor = (prompt("Informe um número: "))

let resto = valor % 2

if (resto == 0 ) {
    console.log("Número par!")
} else {
    console.log("Numero impar")
}


