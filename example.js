const w2num = require('./index.js');

const converter = new w2num();

converter.toNum('seventy-eight thousand six hundred fifty-seven'); // Output: 78657
converter.toWord(9123); // Output: nine thousand one hundred and twenty-three