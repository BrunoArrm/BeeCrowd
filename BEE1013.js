var input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split(' ').map(item => parseInt(item));

let MaiorAB = (a        + b + Math.abs(a        - b)) / 2;
let Maior   = (MaiorAB  + c + Math.abs(MaiorAB  - c)) / 2;

console.log(Maior + ' eh o maior');

// if (a > b) {
//     if (a > c) {
//         console.log(a + ' eh o maior');
//     }
// } else if (b > c) {
//     console.log(b + ' eh o maior');
// } else {
//     console.log(c + ' eh o maior');
// }