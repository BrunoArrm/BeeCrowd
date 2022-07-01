var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const mediaVeiculo = 12;
let tempo = parseInt(lines.shift());
let velocidade = parseInt(lines.shift());
let distancia = tempo * velocidade;
let qtdLitros = distancia / mediaVeiculo;

console.log(qtdLitros.toFixed(3));