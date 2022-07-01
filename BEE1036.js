var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let delta = parseFloat(((b ** 2) - (4 * a * c)).toFixed(5));
let r1 = parseFloat(((-b + (Math.sqrt(delta))) / (2 * a)).toFixed(5));
let r2 = parseFloat(((-b - (Math.sqrt(delta))) / (2 * a)).toFixed(5));

if(isNaN(r1) || isNaN(r2)) {
    console.log('Impossivel calcular');
} else {
    console.log('R1 = ' + r1);
    console.log('R2 = ' + r2);
}