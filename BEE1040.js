var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let lines2 = lines[0];
let notas = lines2.split(' ');

let notaExame = parseFloat(lines[1]);
let n1 = notas[0];
let n2 = notas[1];
let n3 = notas[2];
let n4 = notas[3];
let p1 = 2;
let p2 = 3;
let p3 = 4;
let p4 = 1;
let media = parseFloat((((n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4)) / (p1 + p2 + p3 + p4)));
let mediaFinal = parseFloat(((notaExame + media) / 2));

console.log('Media: ' + media.toFixed(1));
if (media >= 7.0) {
    console.log('Aluno aprovado.');
} else if (media < 5.0) {
    console.log('Aluno reprovado.');
} else {
    console.log('Aluno em exame.');
    console.log('Nota do exame: ' + notaExame.toFixed(1));
    if (mediaFinal >= 5.0) {
        console.log('Aluno aprovado.');
        console.log('Media final: ' + mediaFinal.toFixed(1));
    } else {
        console.log('Aluno reprovado.');
        console.log('Media final: ' + mediaFinal.toFixed(1));
    };
};