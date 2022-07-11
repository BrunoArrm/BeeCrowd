var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Limita a quantidade de testes
let n = parseInt(lines[0]);
// Limpa o lixo do array "lines" e armazena no array "xy"
let xy = [];
for (i = 1; i <= n; i++){
    xy.push(lines[i].trim());
}

for (i = 0; i < xy.length; i++){
    let x = parseInt(xy[i].split(' ')[0]);
    let y = parseInt(xy[i].split(' ')[1]);
    if (y === 0){
        console.log('divisao impossivel');
    } else if (x === 0){
        console.log('0.0');
    } else (
        console.log((x / y).toFixed(1))
    )
}