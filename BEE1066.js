var input = require('fs').readFileSync('stdin', 'utf8');
let n = input.split('\n');

let index = 0;

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for ( index; index < 5; index++ ) {
    if ( n[index] % 2 === 0 || n[index] % 2 === -0 ) {
            par++;
        };
        if ( n[index] % 2 !== 0 ) {
            impar++;
        };
        if ( n[index] > 0 ) {
            positivo++;
        };
        if ( n[index] < 0 ) {
            negativo++;
        };
};

console.log(par + ' valor(es) par(es)');
console.log(impar + ' valor(es) impar(es)');
console.log(positivo + ' valor(es) positivo(s)');
console.log(negativo + ' valor(es) negativo(s)');