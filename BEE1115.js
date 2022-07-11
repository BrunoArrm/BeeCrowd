var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let xy = [];
for (let i = 0; i < lines.length; i++){
    xy.push(lines[i].trim());
}

for (let i = 0; i < xy.length; i++){

    let x = xy[i].split(' ')[0];
    let y = xy[i].split(' ')[1];

    if (x > 0 && y > 0){
        console.log('primeiro');
    } else if (x < 0 && y > 0){
        console.log('segundo');
    } else if (x < 0 && y < 0){
        console.log('terceiro');
    } else if (x > 0 && y < 0){
        console.log('quarto');
    } else {
        break;
    }
}