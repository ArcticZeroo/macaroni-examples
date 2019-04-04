var _temp;

const {
  Operator
} = require('macaroni');

const {
  operators
} = require('macaroni');

const util = require('util');

class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static _throwInvalidOperand(operand) {
    throw new TypeError(Operator.add('Cannot operate on operand ', operand));
  }

  [operators.add](other) {
    if (Operator.strictEqual(typeof other, 'number')) {
      return new Vector2D(Operator.add(this.x, other), Operator.add(this.y, other));
    }

    if (other instanceof Vector2D) {
      return new Vector2D(Operator.add(this.x, other.x), Operator.add(this.y, other.y));
    }

    Vector2D._throwInvalidOperand(other);
  }

  [operators.subtract](other) {
    if (Operator.strictEqual(typeof other, 'number')) {
      return new Vector2D(Operator.subtract(this.x, other), Operator.subtract(this.y, other));
    }

    if (other instanceof Vector2D) {
      return new Vector2D(Operator.subtract(this.x, other.x), Operator.subtract(this.y, other.y));
    }

    Vector2D._throwInvalidOperand(other);
  }

  [operators.multiply](other) {
    // scalar multiplication
    if (Operator.strictEqual(typeof other, 'number')) {
      return new Vector2D(Operator.multiply(this.x, other), Operator.multiply(this.y, other));
    } // dot product


    if (other instanceof Vector2D) {
      return Operator.add(Operator.multiply(this.x, other.x), Operator.multiply(this.y, other.y));
    }

    Vector2D._throwInvalidOperand(other);
  }

  [operators.increment]() {
    return new Vector2D(Operator.add(this.x, 1), Operator.add(this.y, 1));
  }

  toString() {
    return `Vector<${this.x}, ${this.y}>`;
  }

  [util.inspect.custom]() {
    return this.toString();
  }

}

let vector = new Vector2D(4, 9);
console.log('Initial Vector:', vector);
console.log('Scaled by 5:', Operator.multiply(vector, 5));
console.log('Dot product with <2, 6>:', Operator.multiply(vector, new Vector2D(2, 6)));
console.log('Plus <2, 5>:', Operator.add(vector, new Vector2D(2, 5)));
console.log('Minus <3, 7>:', Operator.subtract(vector, new Vector2D(3, 7)));
console.log('Postfix increment return:', (_temp = vector) && ((vector = Operator.increment(vector)) || _temp) && _temp);
console.log('New vector after increment:', vector);
vector = Operator.multiply(vector, 2);
console.log('After scalar set by two:', vector);