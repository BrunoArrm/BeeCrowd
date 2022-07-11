var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valores = [];
for (let i = 0; i < lines.length; i++){
    valores.push(parseInt(lines[i]));
}
let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i < valores.length; i++){
    if (valores[i] === 1){
        alcool++;
    } else if (valores[i] === 2){
        gasolina++;
    } else if (valores[i] === 3) {
        diesel++;
    } else if (valores[i] === 4) {
        break;
    } else {

    }
}
console.log('MUITO OBRIGADO')
console.log('Alcool: ' + alcool);
console.log('Gasolina: ' + gasolina);
console.log('Diesel: ' + diesel);
