var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let trapezio = lines
let t1 = parseFloat(lines[0]);
let t2 = parseFloat(lines[1]);
let t3 = parseFloat(lines[2]);

lines.sort((a, b) => a - b);

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

if ((a + b) > c) {
    perimetro = a + b + c;
    console.log('Perimetro = ' + perimetro.toFixed(1));
} else {
    area = ((t1 + t2) * t3) / 2;
    console.log('Area = ' + area.toFixed(1));
};