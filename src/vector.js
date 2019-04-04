const { operators } = require('macaroni');
const util = require('util');

class Vector2D {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }

   static _throwInvalidOperand(operand) {
      throw new TypeError('Cannot operate on operand ' + operand);
   }

   [operators.add](other) {
      if (typeof other === 'number') {
         return new Vector2D(this.x + other, this.y + other);
      }

      if (other instanceof Vector2D) {
         return new Vector2D(this.x + other.x, this.y + other.y);
      }

      Vector2D._throwInvalidOperand(other);
   }

   [operators.subtract](other) {
      if (typeof other === 'number') {
         return new Vector2D(this.x - other, this.y - other);
      }

      if (other instanceof Vector2D) {
         return new Vector2D(this.x - other.x, this.y - other.y);
      }

      Vector2D._throwInvalidOperand(other);
   }

   [operators.multiply](other) {
      // scalar multiplication
      if (typeof other === 'number') {
         return new Vector2D(this.x * other, this.y * other);
      }

      // dot product
      if (other instanceof Vector2D) {
         return (this.x * other.x) + (this.y * other.y)
      }

      Vector2D._throwInvalidOperand(other);
   }

   [operators.increment]() {
      return new Vector2D(this.x + 1, this.y + 1);
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

console.log('Scaled by 5:', vector * 5);

console.log('Dot product with <2, 6>:', vector * new Vector2D(2, 6));

console.log('Plus <2, 5>:', vector + new Vector2D(2, 5));

console.log('Minus <3, 7>:', vector - new Vector2D(3, 7));

console.log('Postfix increment return:', vector++);
console.log('New vector after increment:', vector);

vector *= 2;

console.log('After scalar set by two:', vector);