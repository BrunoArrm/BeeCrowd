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
for (i = x + 1; i < y; i++){
    if (i % 5 === 2 || i % 5 === 3){
        console.log(i);
    }
}