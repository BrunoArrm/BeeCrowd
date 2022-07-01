var input = require('fs').readFileSync('stdin', 'utf8');

// Wrong answer (0%) no BeeCrowd
let valor = parseFloat(input);

// 100 - Início
console.log('NOTAS:');
let resto = parseInt(valor / 100.00);
valor = valor % 100.00;
console.log(resto + ' nota(s) de R$ 100.00');
// 50.00
resto = parseInt(valor / 50.00);
valor = valor % 50.00;
console.log(resto + ' nota(s) de R$ 50.00');
// 20.00
resto = parseInt(valor / 20.00);
valor = valor % 20.00;
console.log(resto + ' nota(s) de R$ 20.00');
// 10.00
resto = parseInt(valor / 10.00);
valor = valor % 10.00;
console.log(resto + ' nota(s) de R$ 10.00');
// 5.00
resto = parseInt(valor / 5.00);
valor = valor % 5.00;
console.log(resto + ' nota(s) de R$ 5.00');
// 2.00
resto = parseInt(valor / 2.00);
valor = valor % 2.00;
console.log(resto + ' nota(s) de R$ 2.00');
// MOEDAS
console.log('MOEDAS:');
// 1.00
resto = parseInt(valor / 1.00);
valor = valor % 1.00;
console.log(resto + ' moeda(s) de R$ 1.00');
// 0.50
resto = parseInt(valor / 0.50);
valor = valor % 0.50;
console.log(resto + ' moeda(s) de R$ 0.50');
// 0.25
resto = parseInt(valor / 0.25);
valor = valor % 0.25;
console.log(resto + ' moeda(s) de R$ 0.25');
// 0.10
resto = parseInt(valor / 0.10);
valor = valor % 0.10;
console.log(resto + ' moeda(s) de R$ 0.10');
// 0.05
resto = parseInt(valor / 0.05);
valor = valor % 0.05;
console.log(resto + ' moeda(s) de R$ 0.05');
// 0.01
resto = parseInt(valor / 0.01);
console.log(resto + ' moeda(s) de R$ 0.01');