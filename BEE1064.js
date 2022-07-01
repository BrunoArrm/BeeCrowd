var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = lines;
let i = 0;
let p = 0;
let s = 0;
let c = 0;

for( i; i < 6 ; i++ ) {
    if(parseFloat(n[i]) > 0) {
        p++;
        c++;
        s = s + parseFloat(n[i]);
    };
};

media = s / c;
console.log(c + ' valores positivos');
console.log(media.toFixed(1));