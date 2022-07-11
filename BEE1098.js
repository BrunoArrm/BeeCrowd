let i = 0;
let j = 0.0;
resto = 0.0;

if ( i == 0) {
    for ( let count = 0; count < 3; count++ ) {
        j++;
        console.log('I=' + i + ' J=' + j );
    };
};
i = 0.2
j = 1;
for ( i; i < 1; i = i + 0.2) {
    for ( count = 1; count < 4; count++ ) {
        j = count + i;
        console.log( 'I=' + i.toFixed(1) + ' J=' + j);
    }
};
i = 1;
j = 1.0;
if ( i == 1) {
    for ( let count = 0; count < 3; count++ ) {
        j++;
        console.log('I=' + i + ' J=' + j );
    };
};
i = 1.2
j = 2;
for ( i; i < 1.9; i = i + 0.2) {
    for ( count = 1; count < 4; count++ ) {
        j = count + i;
        console.log( 'I=' + i.toFixed(1) + ' J=' + j.toFixed(1) );
    };
};
i = 2;
j = 2

if ( i == 2) {
    for ( let count = 0; count < 3; count++ ) {
        j++;
        console.log('I=' + i + ' J=' + j );
    };
};