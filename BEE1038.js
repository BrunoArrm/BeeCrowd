var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let cod = lines[0];
let qtd = lines[1];
let valProdutos = [null, '4.00', '4.50', '5.00','2.00', '1.50'];
let total = parseFloat(qtd * valProdutos[cod]).toFixed(2);
console.log('Total: R$ ' + total);