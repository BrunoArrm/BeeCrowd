var input = require('fs').readFileSync('stdin', 'utf8');
var input = input.split('\n');

// TESTE 1 FUNCIONA MAS É REPROVADO NO BEECROWD
// let index = 0;
// let valor = parseInt(input[index]);
// let count = 0;
// let tests = 0;

// while (count <= 4) {
//     if (valor % 2 === 0) {
//         tests = tests + 1;
//         index = index + 1;
//         count = count + 1;
//         valor = parseInt(input[index]);
//         // console.log('teste positivo ' + index)
//     } else {
//         count = count + 1;
//         index = index + 1;
//         valor = parseInt(input[index]);
//         // console.log('teste negativo ' + index);
//     }
// }
// console.log(tests + ' valores pares');

// TESTE 2 FUNCIONA MAS É REPROVADO NO BEECROWD
// let index = 0;
// let valor = parseInt(input[index]);
// let pares = 0;

// for (let count = 0; count < 5; count++) {
//     if(valor % 2 === 0) {
//         index = index + 1;
//         valor = parseInt(input[index]);
//         pares = pares + 1;
//     } else {
//         index = index + 1;
//         valor = parseInt(input[index]);
//     }
// }
// console.log(pares + ' valores pares');

