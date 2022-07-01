var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let d1 = lines[0].split(' ');
    d1 = parseInt(d1[1]);
let d2 = lines[2].split(' ');
    d2 = parseInt(d2[1]);
let h1 = lines[1].split(' ');
    h1 = parseInt(h1[0]);
let h2 = lines[3].split(' ');
    h2 = parseInt(h2[0]);
let m1 = lines[1].split(' ');
    m1 = parseInt(m1[2]);
let m2 = lines[3].split(' ');
    m2 = parseInt(m2[2]);
let s1 = lines[1].split(' ');
    s1 = parseInt(s1[4]);
let s2 = lines[3].split(' ');
    s2 = parseInt(s2[4]);
let ts1 = (d1 * 86400) + (h1 * 3600) + (m1 * 60) + s1;
let ts2 = (d2 * 86400) + (h2 * 3600) + (m2 * 60) + s2;
let ts = ts2 - ts1;

let t       = 0;
let dia     = parseInt(ts / 86400);
    t       = ts  % 86400;
let hora    = parseInt(t / 3600);
    t       = t   % 3600;
let minuto  = parseInt(t / 60);
    t       = t   % 60;
let segundo = t;

console.log(dia + ' dia(s)');
console.log(hora + ' hora(s)');
console.log(minuto + ' minuto(s)');
console.log(segundo + ' segundo(s)');