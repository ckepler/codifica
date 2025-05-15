const prompt = require('prompt-sync')()

let  filme = Number(prompt("Escolha seu gênero de filme favorito: 1 - terror, 2 - drama , 3 - romance "))
let genero;
switch (filme) {
    case 1:
        genero = "terror";
        break; 
}
console.log(genero);

