//Solução no VSCode

// let a = 3.0;
// let b = 4.0;
// let c = 5.2;
// const pi = 3.14159;

// let trianguloRetangulo = (a * c) / 2;
// let circulo = pi * (c * c);
// let trapezio = ((a + b) * c) / 2;
// let quadrado = b * b;
// let retangulo = a * b;

// console.log('TRIANGULO = ' + trianguloRetangulo.toFixed(3));
// console.log('CIRCULO = ' + circulo.toFixed(3));
// console.log('TRAPEZIO = ' + trapezio.toFixed(3));
// console.log('QUADRADO = ' + quadrado.toFixed(3));
// console.log('RETANGULO = ' + retangulo.toFixed(3));


//Solução no BeeCrowd


// let [a, b, c] = input.split(" ");
// let a = parseFloat(lines.shift());
// let b = parseFloat(lines.shift());
// let c = parseFloat(lines.shift());
// const pi = 3.14159;

// let trianguloRetangulo = (a * c) / 2;
// let circulo = pi * (c * c);
// let trapezio = ((a + b) * c) / 2;
// let quadrado = b * b;
// let retangulo = a * b;

// console.log('TRIANGULO = ' + trianguloRetangulo.toFixed(3));
// console.log('CIRCULO = ' + circulo.toFixed(3));
// console.log('TRAPEZIO = ' + trapezio.toFixed(3));
// console.log('QUADRADO = ' + quadrado.toFixed(3));
// console.log('RETANGULO = ' + retangulo.toFixed(3));

var input = require('fs').readFileSync('stdin', 'utf8');
// var lines = input.split(' ');

let [a, b, c] = input.split(' ').map(item => parseFloat(item));
const pi = 3.14159;

let trianguloRetangulo = (a * c) / 2;
let circulo = pi * (c * c);
let trapezio = ((a + b) * c) / 2;
let quadrado = b * b;
let retangulo = a * b;

console.log('TRIANGULO: ' + trianguloRetangulo.toFixed(3));
console.log('CIRCULO: ' + circulo.toFixed(3));
console.log('TRAPEZIO: ' + trapezio.toFixed(3));
console.log('QUADRADO: ' + quadrado.toFixed(3));
console.log('RETANGULO: ' + retangulo.toFixed(3));