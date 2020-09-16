function Calculator(a, b) {
  (this.a = a), (this.b = b);
}

Calculator.prototype.plus = function () {
  return this.a + this.b;
};

Calculator.prototype.minus = function () {
  return this.a - this.b;
};

Calculator.prototype.multiply = function () {
  return this.a * this.b;
};

Calculator.prototype.division = function () {
  return this.a / this.b;
};
const c1 = new Calculator(5, 4);
console.log(c1.plus());
console.log(c1.minus());
console.log(c1.multiply());
console.log(c1.division());
