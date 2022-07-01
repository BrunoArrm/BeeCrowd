var input = require('fs').readFileSync('stdin', 'utf8');

let x = parseInt(input);

if (x % 2 === 0) {
    x = x + 2;
} else {
    x = x + 1;
}
console.log(x);