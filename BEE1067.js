  var input = require('fs').readFileSync('stdin', 'utf8');

  let n = parseInt(input);

  for ( let i = 1; i <= n ; i++) {
      if (i % 2 == 1) {
          console.log(i);
        };
  };