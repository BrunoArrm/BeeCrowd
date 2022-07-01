var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let horaInicial = parseInt(lines[0]);
let minutoInicial = parseInt(lines[1]);
let horaFinal = parseInt(lines[2]);
let minutoFinal = parseInt(lines[3]);
let totalMinutos = 0;
let resultadoHora = 0;
let resultadoMinuto = 0;

// Converter HORA INICIAL para minutos
let minutoITotal = (horaInicial * 60) + minutoInicial;
// Converter HORA FINAL para minutos
let minutoFTotal = (horaFinal * 60) + minutoFinal;

if ( minutoITotal < minutoFTotal ) {
    totalMinutos = minutoFTotal - minutoITotal;
    resultadoHora = parseInt(totalMinutos / 60);
    resultadoMinuto = totalMinutos % 60;
    console.log('O JOGO DUROU ' + resultadoHora + ' HORA(S) E ' + resultadoMinuto + ' MINUTO(S)');
} else if ( horaInicial === horaFinal && minutoInicial === minutoFinal ) {
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
} else {
        totalMinutos = ((minutoITotal - minutoFTotal) - 1440) * -1;
        resultadoHora = parseInt(totalMinutos / 60);
        resultadoMinuto = totalMinutos % 60;
        console.log('O JOGO DUROU ' + resultadoHora + ' HORA(S) E ' + resultadoMinuto + ' MINUTO(S)');
};