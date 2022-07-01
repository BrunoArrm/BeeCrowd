var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let maxLoop = lines.length;
let index = 1;
let eo = null;
let pn = null;

// TESTE 1 CORRETO NO VSCODE MAS REPROVADO NO BEECROWD
// for(index; index < maxLoop; index++) {
//     // teste se o valor recebido é diferente de "0"
//     if(parseInt(lines[index]) != 0) {
        
//         // teste se o valor diferente de "0" é par
//         if(parseInt(lines[index]) % 2 === 0) {
//             eo = 'EVEN';
//         } else {
//             eo = 'ODD';
//         };

//         // teste se o valor diferente de "0" é positivo ou negativo
//         if(parseInt(lines[index]) > 0) {
//             pn = 'POSITIVE';
//         } else {
//             pn = 'NEGATIVE';
//         };
        
//         console.log(eo + ' ' + pn);

//     } else {
//         console.log('NULL')
//     };
// };

// TESTE 2 CORRETO NO VSCODE MAS REPROVADO NO BEECROWD
// for(index; index < maxLoop; index++) {
//     if(parseInt(lines[index]) === 0) {
//         console.log('NULL');
//     } else {
//         if(parseInt(lines[index]) % 2 === 0) {
//                         eo = 'EVEN';
//                     } else {
//                         eo = 'ODD';
//         };

//         if(parseInt(lines[index]) > 0) {
//                         pn = 'POSITIVE';
//                     } else {
//                         pn = 'NEGATIVE';
//         };
//         console.log(eo + ' ' + pn);
//     };
// };

while (index < lines.length) {
    if(parseInt(lines[index]) % 2 === 0 && parseInt(lines[index]) > 0) {
        console.log('EVEN POSITIVE');
    };
    if(parseInt(lines[index]) % 2 != 0 && parseInt(lines[index]) > 0) {
        console.log('ODD POSITIVE');
    };
    if(parseInt(lines[index]) % 2 === 0 && parseInt(lines[index]) < 0) {
        console.log('EVEN NEGATIVE');
    };
    if(parseInt(lines[index]) % 2 != 0 && parseInt(lines[index]) < 0) {
        console.log('ODD NEGATIVE');
    };
    if(parseInt(lines[index]) === 0) {
        console.log('NULL');
    };
    index = index + 1;
}