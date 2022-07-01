var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Após quebrar a entrada utilizando como parâmetro a quabra de linha ('\n'),
// quebra-se também o conteúdo de cada índice, como fiz abaixo, 
// passando o índice que quero quebrar ([0] e [1]) e como parâmetro (' ')
let [x1, y1] = lines[0].split(' ');
let [x2, y2] = lines[1].split(' ');

// O "** 2" eleva o valor ao quadrado, 
// onde "**" significa a potência e o "2" é o expoente
// seria o mesmo que escrever "Math.pow(x2 - x1)"
let vetorX = (x2 - x1) ** 2;
let vetorY = (y2 - y1) ** 2;

// O método Math.sqrt significa raiz quadrada
let raizQuadrada = Math.sqrt(vetorX + vetorY);

console.log(raizQuadrada.toFixed(4));