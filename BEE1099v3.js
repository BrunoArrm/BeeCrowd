var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let tt = lines[0] * 2;
let ax = new Array();
let ay = new Array();
let mj = 0;
let mn = 0;
let sum = 0;

for (let i = 1; i < tt + 1; i++) {
    if (i % 2 === 0) {
        ax.push(parseInt(lines[i].split(' ')[0]));
        ay.push(parseInt(lines[i].split(' ')[1]));
    };
};

for (let i = 0; i < ax.length; i++) {

    if(ax[i] > ay[i]) {
        mj = ax[i];
        mn = ay[i];
    } else {
        mj = ay[i];
        mn = ax[i];
    };
    for (i2 = mn; i2 < mj; i2++) {
        if (i2 % 2 !== 0 && i2 > mn && mn !== mj) {
            sum = sum + i2;
        }
    };
    console.log(sum);
    sum = 0;
};
