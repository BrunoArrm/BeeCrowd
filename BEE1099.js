var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
let total = parseInt(lines[0])
let x = []
let y = []
let a = 0
let b = 0
let r = 0
for ( let i = 1; i <= total; i++ ) {
    if ( i % 2 === 0) {
        let s = (lines.split(' ')[i])
        x.push(parseInt(s[0]))
        y.push(parseInt(s[1]))
    }
}
for ( let i = 0; i < total; i++ ) {
    r = 0;
    if ( x[i] <= y[i] ) {
        a = x[i]
        b = y[i]
    } else {
        a = y[i]
        b = x[i]   
    }
    for ( let i = a; i < b; i++) {
        if ( i % 2 !== 0 && i > a && i < b ) {
            r = r + i
        }
    }
    console.log(r)
}