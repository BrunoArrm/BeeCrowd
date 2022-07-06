var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

// Declaração de variáveis
let t           = parseInt(lines[0]);
let qtd         = [];
let esp         = [];
let totalTests  = 0;
let ratos       = 0;
let sapos       = 0;
let coelhos     = 0;

for (let i = 1; i <= t; i++) {
    // Separa o índice 0 em cada linha
    let sep0 = lines[i].split(' ');
    let sep1 = sep0[0];
    //Armazena o índice 0 no array qtd
    qtd.push(sep1);
    totalTests = totalTests + parseInt(sep1);
    // Separa o índice 1 em cada linha
    sep1 = sep0[1].trim();
    
        //Testa se são ratos, sapos ou coelhos
        if (sep1 === 'R') {
            sep1 = 'ratos';
        };

        if (sep1 === 'S') {
            sep1 = 'sapos';
        };

        if (sep1 === 'C') {
            sep1 = 'coelhos';
        };
    
        //Insere a espécie de animal no array esp
    esp.push(sep1);
};
console.log('Total: ' + totalTests + ' cobaias');
//Conta quantos animais de cada especie
for ( i = 0; i < esp.length; i++) {

    if ( esp[i] === 'ratos' ) {
        ratos = ratos + parseInt(qtd[i]);
    };

    if ( esp[i] === 'sapos' ) {
        sapos = sapos + parseInt(qtd[i]);
    };

    if ( esp[i] === 'coelhos' ) {
        coelhos = coelhos + parseInt(qtd[i]);
    };

};
console.log('Total de coelhos: ' + coelhos);
console.log('Total de ratos: ' + ratos);
console.log('Total de sapos: ' + sapos);
//cálculos de porcentagem
Coelhos  = (coelhos * 100) / totalTests;
Ratos    = (ratos * 100) / totalTests;
Sapos    = (sapos * 100) / totalTests;

console.log('Percentual de coelhos: ' + Coelhos.toFixed(2) + ' %');
console.log('Percentual de ratos: ' + Ratos.toFixed(2) + ' %');
console.log('Percentual de sapos: ' + Sapos.toFixed(2) + ' %');