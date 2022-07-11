const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Limpa o array "lines" do lixo e armazena no array "xy"
let xy = [];
for ( i = 0; i < lines.length; i++){
    xy.push(lines[i].trim());
}

// Inicio do laço de repetição
for (i = 0; i < xy.length; i++){
    // Atribui os valores à "a" e à "b"
    let a = parseInt(xy[i].split(' ')[0]);
    let b = parseInt(xy[i].split(' ')[1]);
    // Testa se são iguais e caso seja impôe um break no loop
    if(a === b){
        break;
    }
    // Retorna se a ordem é "Crescente" ou "Decrescente"
    if(a < b){
        console.log('Crescente');
    } else {
        console.log('Decrescente');
    }
}