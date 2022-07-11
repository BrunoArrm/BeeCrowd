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

function simOuNao (sn){
    if (sn === 2){
        console.log('Parar o programa = 2');
    }
    if (sn < 1 || sn > 2){
        console.log('novo calculo (1-sim 2-nao)');
    }
}
function validaNota (vf){
    if (vf <= 10 && vf >= 0){
        media2.push(vf);
    } else {
        console.log('nota invalida');
    }
}

for (i; i < lines.length; i++){
    if (dados[i] === 1) {
        i++;
        validaNota(dados[i]);
    } else {
        simOuNao(dados[i]);
        i++;
    }
}
console.log('TESTE i = ' + i)
console.log(media2);
console.log('media = ' + ((media2[0] + media2[1]) / 2).toFixed(2));
simOuNao(dados[i]);