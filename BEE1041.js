var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let x = parseFloat(lines[0]);
let y = parseFloat(lines[1]);

if (x == 0 && y != 0) {
    console.log('Eixo Y');
} else if (x != 0 && y == 0) {
    console.log('Eixo X');
} else if (x > 0 && y > 0) {
    console.log('Q1');
} else if (x < 0 && y > 0) {
    console.log('Q2');
} else if (x < 0 && y < 0) {
    console.log('Q3');
} else if (x > 0 && y < 0) {
    console.log('Q4');
} else {
    console.log('Origem');
};