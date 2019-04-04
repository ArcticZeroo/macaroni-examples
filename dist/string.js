const {
  Operator
} = require('macaroni');

const {
  operators
} = require('macaroni');

String.prototype[operators.subtract] = function (other) {
  const regex = other instanceof RegExp ? other : new RegExp(other, 'g');
  return this.replace(regex, '');
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

String.prototype[operators.multiply] = function (other) {
  return Operator.multiply([this], other).join('');
};

const baseString = 'hello world!';
console.log(Operator.subtract(baseString, 'o'));
console.log(Operator.multiply(baseString, 3));