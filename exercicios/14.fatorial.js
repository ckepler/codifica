const prompt = require('prompt-sync')()

function calcularFatorial(numero) {
    if (numero < 0) {
        return "O fatorial não está definido para números negativos.";
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return `O fatorial de ${numero} é ${fatorial}.`;
}

const numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
console.log(calcularFatorial(numero));
