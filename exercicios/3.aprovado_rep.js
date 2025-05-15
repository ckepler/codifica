const prompt = require('prompt-sync')()

let nota = (prompt("Informe a nota do aluno: "))
if (nota <=3) {
    console.log ("Reprovado!")
} else if (nota <=6) {
    console.log ("Recuperação!")
} else if (nota >=7 && nota <=10) {
    console.log ("Aprovado!")
} if (nota >10) {
    console.log ("nota inválida! apenas entre 0 e 10!")
}

