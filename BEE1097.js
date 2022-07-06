let j1 = 7;
let j = 7;

for ( let i = 1; i <= 9; i = i + 2) {
    j = j1;

    for ( let count = 0; count < 3; count++) {
        console.log(`I=${i} J=${j}`);
        j = j - 1;
    };
    j1 = j1 + 2;

};