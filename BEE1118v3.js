var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Limpa o array "lines" do lixo e armazena em "dados"
let dados = [];
for ( let i = 0; i < lines.length; i++){
    dados.push(parseFloat(lines[i].trim()));
}

let notas = [];
let calcular = 'media'; // "media" ou "resposta" -> Variável diz ao programa se ele deve calcular a média ou a resposta do usuário
let index = 0;

function calculaMedia(nota){
    if (nota <= 10 && nota >= 0){
        notas.push(dados[index]);
    } else {
        console.log('nota invalida');
    }
}

for (index; index < dados.length; index++){
    // Se o status do programa for calcular = 'media', entrará nesse laço de repetição e calculará a média
    if(calcular === 'media'){
        for (index; notas.length < 2; index++){
            calculaMedia(dados[index]);
        }
        let m = ((notas[0] + notas[1]) / 2);
        console.log('media = ' + m.toFixed(2));
        console.log('novo calculo (1-sim 2-nao)');
        notas = [];
        calcular = 'resposta';
        index--;
    } else if (calcular = 'resposta'){
        if (dados[index] === 1) {
            calcular = 'media';
        } else if (dados[index] === 2){
            break;
        } else {
            console.log('novo calculo (1-sim 2-nao)');
        }
    }
}