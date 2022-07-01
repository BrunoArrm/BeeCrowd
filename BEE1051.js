var input = require('fs').readFileSync('stdin', 'utf8');

let salario = parseFloat(input);
let resto = salario;
let tributos = 0;
let t1000 = 0;
let t1500 = 0;
let t4500 = 0;
let isento = null;

//parte do salario isenta (ate 2000)
if ( salario < 2000 ) {
    isento = true;
} else {
    resto = resto - 2000;
};
if ( resto > 1000) {
    t1000 = 1000 * 0.08;
    resto = resto - 1000;
} else {
    t1000 = resto * 0.08;
    resto = 0;
};
if ( resto > 1500) {
    t1500 = 1500 * 0.18;
    resto = resto - 1500;
} else {
    t1500 = resto * 0.18;
    resto = 0;
};
if ( resto !== 0 ) {
    t4500 = resto * 0.28;
};
tributos = t1000 + t1500 + t4500;

if ( isento === true ) {
    console.log('Isento');
} else {
    console.log('R$ ' + tributos.toFixed(2));
};