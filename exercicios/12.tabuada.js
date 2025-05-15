const prompt = require('prompt-sync')()

let n = (prompt("Informe um número para ver sua tabuada: "))
let tab = 0;

for (i = 1; i<=10; i++) {
    console.log(n*i)
}
