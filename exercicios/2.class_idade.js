const prompt = require('prompt-sync')()

let idade = (prompt("Informe a idade: "))
if (idade <=12) {
    console.log ("Criança!")
} else if (idade <=17) {
    console.log ("Adolescente!")
} else if (idade >=18 && idade <=64) {
    console.log ("Adulto!")
} else if (idade >=65) {
    console.log ("Idoso!")
}

