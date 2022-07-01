var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let inicio      = parseInt(lines[0]);
let fim         = parseInt(lines[1]);
let d1          = 0;
let d2          = 0;
let thoras      = 0;

if ( inicio < fim ) {
    thoras = fim - inicio;
    console.log('O JOGO DUROU '+ thoras +' HORA(S)');
} else if ( inicio === 0 && fim === 0) {
    console.log('O JOGO DUROU 24 HORA(S)');
} else {
    while ( inicio < 24 ) {
        inicio++;
        d1++;
    };
    while ( d2 < fim ) {
        d2++;
    };
    thoras          = d1 + d2;
    console.log('O JOGO DUROU '+ thoras +' HORA(S)');
}