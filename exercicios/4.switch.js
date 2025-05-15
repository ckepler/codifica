const prompt = require('prompt-sync')()

let  filme = Number(prompt("Escolha seu gênero de filme favorito: \n 1 - terror\n 2 - drama\n 3 - romance\n "))
let genero;
switch (filme) {
    case 1:
        genero = "seu gênero preferido é Terror";
        break; 
    case 2:
        genero = "Seu gênero preferido é Drama";
        break;
    case 3: 
        genero = "Seu gênero preferido é Romance";
        break;
    default:
        genero = "Valor inválido";
}
console.log(genero);

