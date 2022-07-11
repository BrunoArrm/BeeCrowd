var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
// Garante que x e y estejam ordenados de forma crescente
if (x > y){
    let z = x;
    x = y;
    y = z;
}
let soma = 0;
for (i = x; i <= y; i++){
    if (i % 13 !== 0){
        soma += i;
    }
}
console.log(soma);