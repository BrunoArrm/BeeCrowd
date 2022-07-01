var input = require('fs').readFileSync('stdin', 'utf8');
var input = input.split('\n');

let count           = 0;
let testePositivos  = 0;
let index           = 0;

while(index <= 6) {
    testePositivos = input[index];

    if(testePositivos === null) {
        index = index + 1;
    } else if (testePositivos > 0) {
        count = count + 1;
        index = index + 1;
    } else {
        index = index + 1;
    }
}

console.log(count + ' valores positivos');
