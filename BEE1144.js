var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseInt(input);

let l1 = [];
let l2 = [];
let idL = 1;
for (i = 0; i < lines; i++){
    // Armazena no primeiro índice o número da linha
    l1.push(idL);
    l2.push(idL);
    // Armazena no segundo índice a id vezes ele mesmo
    l1.push(idL * idL);
    l2.push(l1[1] + 1);
    // Armazena no terceiro índice a segunda id vezes id da linha
    l1.push(l1[1] * idL);
    l2.push(l1[2] + 1);
    // Imprime os valores calculados
    console.log(l1[0] + ' ' + l1[1] + ' ' + l1[2]);
    console.log(l2[0] + ' ' + l2[1] + ' ' + l2[2]);
    // Reseta os valores para um novo loop até atingir a quantidade máxima de loops
    l1 = [];
    l2 = []
    idL++;
}