var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseInt(input);

let linha = [];
let idlinha = 1;
for (i = 0; i < lines; i++){
    linha.push(idlinha);
    linha.push(idlinha*idlinha);
    linha.push(linha[1]*idlinha);
    console.log(linha[0] + ' ' + linha[1] + ' ' + linha[2]);
    idlinha++;
    linha = [];
}