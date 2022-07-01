var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let rest1 = b % a;
let rest2 = a % b;

if (rest1 == 0 || rest2 == 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
};