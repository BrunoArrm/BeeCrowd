// Solução no VSCODE

// let A = 2;
// let B = 3;

// let X = A + B;

// console.log('X = ' + X)

// Solução no BeeCrowd

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

console.log('X = ' + (a + b))