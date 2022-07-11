var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Limpa o array "lines" do lixo e armazena em "dados"
let dados = [];
for ( let i = 0; i < lines.length; i++){
    dados.push(parseFloat(lines[i].trim()));
}

let i = 0;
let media1 = [];
let media2 = [];
// Realiza o cálculo da primeira média
for (media1.length; media1.length < 2; i++){
    if ( dados[i] <= 10 && dados[i] >= 0){
        media1.push(dados[i]);
    } else {
        console.log('nota invalida');
    }
}
// Imprime os resultados
console.log('media = ' + ((media1[0] + media1[1]) / 2).toFixed(2));
console.log('novo calculo (1-sim 2-nao)');
// Trava o teste "novo calculo (1-sim 2-nao)" quando fim = 1
let fim = 0;
for (i; fim < 1; i++){
    if (dados[i] <= 10 && dados[i] >= 0){
        console.log('novo calculo (1-sim 2-nao)');
    } else if (dados[i] === 2){
        console.log('laço 2');
        break;
    }
}
// Realiza o cálculo da segunda média
// for (media2.length; media2.length < 2; i++){
//     if ( dados[i] <= 10 && dados[i] >= 0){
//         media2.push(dados[i]);
//     } else {
//         console.log('nota invalida');
//     }
// }
console.log(media2)