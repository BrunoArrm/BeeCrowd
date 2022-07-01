var input = require('fs').readFileSync('stdin', 'utf8');

let mes = parseInt(input) - 1;

let meses = [
                'January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'
            ];

console.log(meses[mes]);