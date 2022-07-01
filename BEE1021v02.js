var input = require('fs').readFileSync('stdin', 'utf8');
var valor = parseFloat(input);

let notas   = ['100.00', '50.00', '20.00', '10.00', '5.00', '2.00'];
let moedas  = ['1.00', '0.50', '0.25', '0.10', '0.05', '0.01'];
let index = 0;
let resto = 0;

console.log('NOTAS:');
for(index = 0; index < notas.length; index++) {
    resto = parseInt(valor / notas[index]);
    valor = (valor % notas[index]).toFixed(2);
    console.log(resto + ' nota(s) de R$ ' + notas[index]);
};
console.log('MOEDAS:');
for(index = 0; index < notas.length; index++) {
    resto = parseInt(valor / moedas[index]);
    valor = (valor % moedas[index]).toFixed(2);
    console.log(resto + ' moeda(s) de R$ ' + moedas[index]);
};