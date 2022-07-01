// Solução no VSCode

// let notaA = 5.1;
// let notaB = 8.9;
// let notaC = 7.6;
// const pesoA = 2;
// const pesoB = 3;
// const pesoC = 5;
// let mediaPonderada = ((notaA * pesoA) + (notaB * pesoB) + (notaC * pesoC)) / (pesoA + pesoB + pesoC)

// console.log('MEDIA = ' + mediaPonderada.toFixed(1));

// Solução no BeeCrowd

let notaA = parseFloat(lines.shift());
let notaB = parseFloat(lines.shift());
let notaC = parseFloat(lines.shift());
const pesoA = 2;
const pesoB = 3;
const pesoC = 5;
let mediaPonderada = ((notaA * pesoA) + (notaB * pesoB) + (notaC * pesoC)) / (pesoA + pesoB + pesoC)

console.log('MEDIA = ' + mediaPonderada.toFixed(1));