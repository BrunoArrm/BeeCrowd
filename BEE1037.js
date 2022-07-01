var input = require('fs').readFileSync('stdin', 'utf8');
var numero = parseFloat(input);

// Verificar possibilidade de declarar as variáveis de um array na mesma linha
let i1  = ['0', '25'];
let i1a = i1[0];
let i1b = i1[1];
let i2  = ['25', '50'];
let i2a = i2[0];
let i2b = i2[1];
let i3  = ['50', '75'];
let i3a = i3[0];
let i3b = i3[1];
let i4  = ['75', '100'];
let i4a = i4[0];
let i4b = i4[1];

if (numero >= i1a && numero <= i1b) {
    console.log('Intervalo [0,25]');
} else if (numero > i2a && numero <= i2b) {
    console.log('Intervalo (25,50]');
} else if (numero > i3a && numero <= i3b) {
    console.log('Intervalo (50,75]');
} else if (numero > i4a && numero <= i4b) {
    console.log('Intervalo (75,100]');
} else {
    console.log('Fora de intervalo');
};

