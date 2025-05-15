const prompt = require('prompt-sync')();

let A = parseFloat(prompt("Informe o lado A: "))
let B = parseFloat(prompt("Informe o lado B: "))
let C = parseFloat(prompt("Informe o lado C: "))


if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero")
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles")
    } else {
        console.log("Triângulo Escaleno")
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.")
}
