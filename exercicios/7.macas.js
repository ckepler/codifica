const prompt = require('prompt-sync')();

let macas = Number(prompt("Informe quantas maças você comprou: "))

if ( macas < 12) {
    console.log("O preço total foi de R$: ", macas *0.30)
}
if ( macas >= 12) {
    console.log("O preço total foi de R$: ", macas *0.25)
}