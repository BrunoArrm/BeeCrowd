var input = require('fs').readFileSync('stdin', 'utf8');

const t = parseInt(input);
// Conversão de horas em segundos
let h = parseInt(t / 3600);
// Conversão de minutos em segundos
let m = parseInt((t % 3600) / 60);
// Os segundos são o resto dos cálculos anteriores
let s = (t % 3600) % 60;
console.log(h + ':' + m + ':' + s);