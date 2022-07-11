var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Limpa o Array "lines" de todo o lixo e armazena o resultado no array "mn"
let mn = [];
for (let i = 0; i < lines.length; i++){
    mn.push(lines[i].trim());
}
let x = 0;
let y = 0;
for (let i = 0; i < mn.length; i++){
    x = mn[i].split(' ')[0];
    y = mn[i].split(' ')[1];  
    // Coloca os valores a e b em ordem crescente
    if (x < y){
        a = x;
        b = y;
    } else {
        a = y;
        b = x;
    }
    // Forma a String e faz o cálculo
    let string = '';
    let integer = 0;
    for (let i = a; i <= b; i++ ){
        string = string + ' ' + i;
        integer = parseInt(integer) + parseInt(i);
    }
    // Se encontrar o valor "0" em "a" ou "b" o loop é parado
    if (parseInt(a) === 0 || parseInt(a) < 0 || parseInt(b) === 0 || parseInt(b) < 0){
        break;
    }
    console.log(string.trim() + ' Sum=' + integer);
    string = 0;
    integer = 0;
}