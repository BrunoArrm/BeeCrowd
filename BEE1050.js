var input = require('fs').readFileSync('stdin', 'utf8');

let ddd = parseInt(input);

let tabelaDDD = [   
                    null, null, null, null, null, null, null, null, null, null,
                    null, 'Sao Paulo', null, null, null, null, null, null, null, 'Campinas',
                    null, 'Rio de Janeiro', null, null, null, null, null, 'Vitoria', null, null,
                    null, 'Belo Horizonte', 'Juiz de Fora', null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, 'Brasilia', null, null, null, null, null, null, null, null,
                    null, 'Salvador', null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null,
                ]

if ( tabelaDDD[ddd] === null ) {
    console.log('DDD nao cadastrado')
} else {
    console.log(tabelaDDD[ddd]);
}