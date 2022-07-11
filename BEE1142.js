var input = require('fs').readFileSync('stdin', 'utf8');

let linha = [];
let count = 1;
for (let i = 0; i < input; i++){
    for (let i2 = 0; i2 < 4; i2++){
        if (linha.length < 3){
            linha.push(count);
            count++;
        } else {
            linha.push('PUM');
        }
    }
    console.log(linha[0] + ' ' + linha[1] + ' ' + linha[2] + ' ' + linha[3]);
    linha = [];
    count++;
}