var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let diasI1 = lines[0];
let diasI2 = diasI1.split(' ');
let diasInicio = parseInt(diasI2[1]);
let horasI1 = lines[1];
let horasI2 = horasI1.split(' ');
let horasInicio = parseInt(horasI2[0]);
let minutosInicio = parseInt(horasI2[2]);
let segundosInicio = parseInt(horasI2[4]);
let diasF1 = lines[2];
let diasF2 = diasF1.split(' ');
let diasFinal = parseInt(diasF2[1]);
let horasF1 = lines[3];
let horasF2 = horasF1.split(' ');
let horasFinal = parseInt(horasF2[0]);
let minutosFinal = parseInt(horasF2[2]);
let segundosFinal = parseInt(horasF2[4]);

let totalSegundosInicial =  (diasInicio * (60 * 60 * 24)) + 
                            (horasInicio * (60 * 60)) + (minutosInicio * (60)) + segundosInicio;
let totalSegundosFinal =    (diasFinal * (60 * 60 * 24)) + 
                            (horasFinal * (60 * 60)) + (minutosFinal * (60)) + segundosFinal;
let total = totalSegundosFinal - totalSegundosInicial;

let dia = parseInt(total / (60 * 60 * 24));
console.log(dia + ' dia(s)');

let hora = total % (60 * 60 * 24);
hora = parseFloat((hora / (60 * 60)).toFixed(0));
console.log(hora + ' hora(s)');

let minuto = hora % (60 * 60);
minuto = parseFloat((minuto / 60).toFixed(0));
console.log(minuto + ' minuto(s)');

let segundo = parseFloat((minuto % 60).toFixed(0));
console.log(segundo + ' segundo(s)');