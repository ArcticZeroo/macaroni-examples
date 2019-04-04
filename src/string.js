const { operators } = require('macaroni');

String.prototype[operators.subtract] = function (other) {
   const regex = (other instanceof RegExp) ? other : new RegExp(other, 'g');

   return this.replace(regex, '');
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

String.prototype[operators.multiply] = function (other) {
   return ([this] * other).join('');
};

const baseString = 'hello world!';

console.log(baseString - 'o');
console.log(baseString * 3);