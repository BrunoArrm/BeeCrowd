var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let pwds = [];
for (i = 0; i < lines.length; i++){
    pwds.push(parseInt(lines[i].trim()));
}

const pwd = 2002;

for (i = 0; i < pwds.length; i++){
    if (pwds[i] === pwd){
        console.log('Acesso Permitido');
        break;
    } else {
        console.log('Senha Invalida');
    }
}