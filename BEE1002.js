// Solução no VSCode
// let raio = 2;
// console.log('raio = ' + raio)
// const n = 3.14159;
// console.log('n = ' + n)
// let raioQuadrado = raio * raio;
// console.log('raio ao quadrado = ' + raioQuadrado)

// let area = n * raioQuadrado;
// console.log('A=' + area.toFixed(4))

// Solução no BeeCrowd

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let raio = parseFloat(lines.shift());
const n = 3.14159;
let raioQuadrado = raio * raio;
let area = n * raioQuadrado;
console.log('A=' + area.toFixed(4))