var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let origem = lines;
let oa = parseInt(origem[0]);
let ob = parseInt(origem[1]);
let oc = parseInt(origem[2]);

lines.sort((a, b) => a - b);

let la = parseInt(lines[0]);
let lb = parseInt(lines[1]);
let lc = parseInt(lines[2]);

console.log(la + '\n' + lb + '\n' + lc + '\n'  + '\n' + oa + '\n' + ob + '\n' + oc);