var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

lines.sort((a, b) => b - a);

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

if ( a >= (b + c) ) {
    console.log('NAO FORMA TRIANGULO');
} else {

    if ( a ** 2 === ((b ** 2) + (c ** 2)) ) {
        console.log('TRIANGULO RETANGULO');
    };

    if ( (a ** 2) > ((b ** 2) + (c ** 2)) ) {
        console.log('TRIANGULO OBTUSANGULO');
    };

    if ( a ** 2 < ((b ** 2) + (c ** 2)) ) {
        console.log('TRIANGULO ACUTANGULO');
    };

    if ( a === b && b === c ) {
        console.log('TRIANGULO EQUILATERO');
    };

    if ( (a === b && b !== c) || (a === c && c !== b) || (b === c && c !== a) ) {
        console.log('TRIANGULO ISOSCELES');
    };

};