var input = require('fs').readFileSync('stdin', 'utf8')

let diasTotal = parseInt(input);

let ano = parseInt(diasTotal / 365);
let mes = parseInt((diasTotal % 365) / 30);
let dias = (diasTotal % 365) % 30;

console.log(ano + ' ano(s)');
console.log(mes + ' mes(es)');
console.log(dias + ' dia(s)');
