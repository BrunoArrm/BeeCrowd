var input = require('fs').readFileSync('stdin', 'utf8');

let distancia = parseInt(input);

let time = distancia * 2;

console.log(time + ' minutos');