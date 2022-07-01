var input = require('fs').readFileSync('stdin', 'utf8');

let salario = parseFloat(input);

let reajuste = ['0.15', '0.12', '0.10', '0.07', '0.04'];
let index = 0;
let aumento = 0;

if ( salario >= 0 && salario <= 400.00 ) {
    index = 0;
    aumento = parseFloat((salario * reajuste[index]));
} else if ( salario > 400.00 && salario <= 800.00 ) {
    index = 1;
    aumento = parseFloat((salario * reajuste[index]));
} else if ( salario > 800.00 && salario <= 1200.00 ) {
    index = 2;
    aumento = parseFloat((salario * reajuste[index]));
} else if ( salario > 1200.00 && salario <= 2000.00 ) {
    index = 3;
    aumento = parseFloat((salario * reajuste[index]));
} else {
    index = 4;
    aumento = parseFloat((salario * reajuste[index]));
};

let novoSalario = (salario + aumento).toFixed(2);
let percentual = parseInt(reajuste[index] * 100);

console.log('Novo salario: ' + novoSalario);
console.log('Reajuste ganho: ' + aumento.toFixed(2));
console.log('Em percentual: ' + percentual +  ' %');