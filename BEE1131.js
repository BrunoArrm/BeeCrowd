var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Limpa o array "lines" de todo lixo e armazena no array "dados"
let dados = [];
for (let i = 0; i < lines.length; i++){
    dados.push(lines[i].trim());
}

// Analisa a quantidade de gols e atribui aos arrays de inter e gremio respectivamente
// Também analisa as respostas do usuario
let int = [];
let gre = [];
let status = 'placar'
for (let i = 0; i < dados.length; i++){
    if(status === 'placar'){
        int.push(parseInt(dados[i].split(' ')[0]));
        gre.push(parseInt(dados[i].split(' ')[1]));
        console.log('Novo grenal (1-sim 2-nao)');
        status = 'resposta';
    } else if (status = 'resposta'){
        if(parseInt(dados[i]) === 1){
            status = 'placar';
        } else {
            break;
        }

    }
}

// Conta o total de jogos, atribui 1 para o time que venceu cada um, apura se houve empate
let grenais = int.length;
let inter = 0;
let gremio = 0;
let empates = 0;
for (let i = 0; i < int.length; i++){
    if (parseInt(int[i]) > parseInt(gre[i])){
        inter++;
    } else if (parseInt(int[i]) < parseInt(gre[i])){
        gremio++;
    // } else (parseInt(int[i]) === parseInt(gre[i])){
    } else {
        empates++;
    }
}
console.log(grenais + ' grenais');
console.log('Inter:' + inter);
console.log('Gremio:' + gremio);
console.log('Empates:' + empates);

if(inter > gremio){
   console.log('Inter venceu mais');
} else {
    console.log('Gremio venceu mais');
}