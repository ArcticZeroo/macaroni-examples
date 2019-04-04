const { operators } = require('macaroni');

Array.prototype[operators.add] = function (other) {
   if (Array.isArray(other)) {
      return [...this, ...other];
   }

   return [...this, other];
};

Array.prototype[operators.multiply] = function (other) {
    if (typeof other !== 'number') {
       throw new TypeError('Other must be a number to multiply');
    }

    const repeatedArray = [];

    for (let repeat = 0; repeat < other; ++repeat) {
       for (let i = 0; i < this.length; ++i) {
          repeatedArray.push(this[i]);
       }
    }

    return repeatedArray;
};

const array = [1, 2, 3];

console.log(array + 4);
console.log(array + ['hello', 'world', 10, false, {}]);
console.log([null] * 10);
console.log(['Hello', 'World'] * 5);