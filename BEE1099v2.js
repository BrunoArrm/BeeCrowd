var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let loopMaximo = lines[0] * 2;
let eixo = [];
let a = 0;
let b = 0;
let sum = 0;
let i = 1;
//Organiza os dados de entrada em um único array e o trata, retirando o caractere '\r'
for ( let i = 0; i < loopMaximo + 1; i++ ) {
    if ( lines[i] !== '\r' ) {
        eixo.push(lines[i]);
    };
};
//Grava os números em a e b a cada loop
for ( let i = 1; i < eixo.length; i++ ) {
    let x = (eixo[i].split(' ')[0] * 1);
    let y = (eixo[i].split(' ')[1] * 1);
    //Organiza do menor para o maior
    if ( x > y ) {
        a = parseInt(y);
        b = parseInt(x);
    } else {
        a = parseInt(x);
        b = parseInt(y);
    };
    //Realiza as somas
    for ( let i = a; i < b; i++ ) {
        if (i > a && i % 2 !== 0 ) {
            sum = sum + i;
        };
    };
    console.log(sum);
    sum = 0;
};