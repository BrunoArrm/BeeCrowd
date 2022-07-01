var     input           = require('fs').readFileSync('stdin', 'utf8');
var     lines           = input.split('\n');

let     totalDistance   = parseInt(lines.shift());
let     usedGas         = parseFloat(lines.shift());

let =   averageGas      = totalDistance / usedGas;

console.log(averageGas.toFixed(3) + ' km/l');