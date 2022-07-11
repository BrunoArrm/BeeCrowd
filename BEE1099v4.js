var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Remove os espaços em branco, '\n' e '\r' do array
// principal (lines) e armazena no novo array xy0
let xy0 = new Array();
for (let i = 0; i < lines.length; i++){
    xy0.push(lines[i].trim());
}
// Remove o restante do lixo (índices vazios) 
// e armazena no array que será usado no programa: xy
let xy = new Array();
for (let i = 0; i < xy0.length; i++){
    if (xy0[i] !== ''){
        xy.push(xy0[i]);
    }
}

for ( i = 1; i < xy.length; i++){
    // Armazena os números nos índices do array "xy" em "x" e "y"
    let x = parseInt(xy[i].split(' ')[0]);
    let y = parseInt(xy[i].split(' ')[1]);
    let a = 0;
    let b = 0;
    // Armazena o menor entre "x" e "y" em "a" e o maior em "b"
    if(x < y){
        a = x;
        b = y;
    } else {
        a = y;
        b = x;
    }
    let soma = 0;
    for(let i = a + 1; i < b; i++){
        if(i % 2 !== 0){
            soma = soma + i;
        }
    }
    console.log(soma);
    soma = 0;
}