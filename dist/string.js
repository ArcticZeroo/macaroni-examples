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

const baseString = 'hello world!';
console.log(Operator.subtract(baseString, 'o'));