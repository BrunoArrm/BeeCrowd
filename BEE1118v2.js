var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Limpa o array "lines" do lixo e armazena em "dados"
let dados = [];
for ( let i = 0; i < lines.length; i++){
    dados.push(parseFloat(lines[i].trim()));
}

let media = [];
let index = 0;
// Função para calcular a media
function calcMedia(nota){
    if(nota <= 10 && nota >= 0){
        media.push(nota);
    } else {
        console.log('nota invalida');
    }
}
// Função para analisar a resposta do usuário (impressa no arquivo)
function simOuNao(resp){
    if(resp === 2){
        
    } else {
        console.log('novo calculo (1-sim 2-nao)');
    }
}

for (index; media.length < 2; index++){
    calcMedia(dados[index])
}

let m1 = ((media[0] + media[1]) / 2);
console.log('media = ' + m1.toFixed(2));
console.log('novo calculo (1-sim 2-nao)');
media = [];

for (index; index < dados.length; index++){
    if (dados[index] === 1){
        index++;
        for(index; media.length < 2; index++){
        calcMedia(dados[index]);
        m1 = ((media[0] + media[1]) / 2);
        }
        console.log('media = ' + m1.toFixed(2));
        console.log('novo calculo (1-sim 2-nao)');
    } else if (dados[index] === 2){
        break;
    } else {
        console.log('novo calculo (1-sim 2-nao)');
    }
}
media = [];
for(index; index < dados.length; index++){
    if(index === 2){
        break;
    } else {
        simOuNao(dados[index]);
    }
}