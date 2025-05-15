const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Informe o ${i}º número: `));
    soma += numero;
}

console.log("A soma total dos números informados é: ",soma);
