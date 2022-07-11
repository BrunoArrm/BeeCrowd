var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
// Limpa o lixo no array "lines" e grava no array "notasGerais"
let notasGerais = [];
for (let i = 0; i < lines.length; i++){
    notasGerais.push(parseFloat(lines[i].trim()));
}
// Valida pega as duas primeiras notas válidas no array "notasGerais" 
// e as armazena em "notasValidas"
let notasValidas = [];
let count = 0;
while (notasValidas.length < 2){
    if (notasGerais[count] <= 10 && notasGerais[count] >= 0){
        notasValidas.push(notasGerais[count]);
        count++;
    } else {
        console.log('nota invalida');
        count++;
    }
}
// Calcula a media e a imprime
let media = (notasValidas[0] + notasValidas[1]) / 2;
console.log('media = ' + media.toFixed(2));