var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

    // console.log('TESTES');
    // console.log(lines);
    // console.log('');

// Tratamento para extrair dia inicial
let diasI1 = lines[0];
let diasI2 = diasI1.split(' ');
let diasInicio = parseInt(diasI2[1]);
    // console.log('Dia Inicial: '+ diasInicio);
// Tratamento para extrair hora / minutos / segundos iniciais
let horasI1 = lines[1];
let horasI2 = horasI1.split(' ');
let horasInicio = parseInt(horasI2[0]);
    // console.log('Horas Inicais: '+ horasInicio);
let minutosInicio = parseInt(horasI2[2]);
    // console.log('Minutos Iniciais: '+ minutosInicio);
let segundosInicio = parseInt(horasI2[4]);
    // console.log('Segundos Iniciais: ' + segundosInicio);
    // console.log('');

// Tratamento para extrair dia final
let diasF1 = lines[2];
let diasF2 = diasF1.split(' ');
let diasFinal = parseInt(diasF2[1]);
    // console.log('Dia Inicial: '+ diasFinal);
// Tratamento para extrair hora / minutos / segundos finais
let horasF1 = lines[3];
let horasF2 = horasF1.split(' ');
let horasFinal = parseInt(horasF2[0]);
    // console.log('Horas Inicais: '+ horasFinal);
let minutosFinal = parseInt(horasF2[2]);
    // console.log('Minutos Iniciais: '+ minutosFinal);
let segundosFinal = parseInt(horasF2[4]);
    // console.log('Segundos Iniciais: ' + segundosFinal);
    // console.log('');

// Convertendo todos os resultados para minutos
let totalSegundosInicial = (diasInicio * 1440) + (horasInicio * 60) + minutosInicio;
    // console.log('Total em Segundos: ' + totalSegundosInicial);
let totalSegundosFinal = (diasFinal * 1440) + (horasFinal * 60) + minutosFinal;
    // console.log('Total em Segundos: ' + totalSegundosFinal);
let decompor = (totalSegundosFinal - totalSegundosInicial);
    // console.log('');    
    // console.log('decompor: ' + decompor);
    // console.log('');
    // console.log('RESULTADO ABAIXO');
    // console.log('');

// Inicio da apresentação do resultado
let dia = parseInt(decompor / 1440);
console.log(dia + ' dia(s)');

let hora = decompor % 1440;
hora = parseInt(hora / 60);
console.log(hora + ' hora(s)');

let minuto = hora % 60;
minuto = (hora / 60);
console.log(minuto + ' minuto(s)');

segundos = parseInt(minuto % 60);
console.log(segundos + ' segundo(s)');