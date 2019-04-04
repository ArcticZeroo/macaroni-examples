const {
  Operator
} = require('macaroni');

const {
  operators
} = require('macaroni');

Array.prototype[operators.add] = function (other) {
  if (Array.isArray(other)) {
    return [...this, ...other];
  }

  return [...this, other];
};

Array.prototype[operators.multiply] = function (other) {
  if (Operator.strictNotEqual(typeof other, 'number')) {
    throw new TypeError('Other must be a number to multiply');
  }

  const repeatedArray = [];

  for (let repeat = 0; Operator.lessThan(repeat, other); repeat = Operator.increment(repeat)) {
    for (let i = 0; Operator.lessThan(i, this.length); i = Operator.increment(i)) {
      repeatedArray.push(this[i]);
    }
  }

  return repeatedArray;
};

const array = [1, 2, 3];
console.log(Operator.add(array, 4));
console.log(Operator.add(array, ['hello', 'world', 10, false, {}]));
console.log(Operator.multiply([null], 10));
console.log(Operator.multiply(['Hello', 'World'], 5));