// Solução no VSCode

// let     notaA           = 7.8;
// let     notaB           = 6.1;
// const   pesoA           = 3.5;
// const   pesoB           = 7.5;
// let     mediaPonderada  = ((notaA * pesoA) + (notaB * pesoB)) / (pesoA + pesoB);

// console.log('MEDIA = ' + mediaPonderada.toFixed(5));

// Solução no BeeCrowd

let notaA = parseFloat(lines.shift());
let notaB = parseFloat(lines.shift());
const pesoA = 3.5;
const pesoB = 7.5;
let mediaPonderada = ((notaA * pesoA) + (notaB * pesoB)) / (pesoA + pesoB);

console.log('MEDIA = ' + mediaPonderada.toFixed(5));