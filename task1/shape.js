export default class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw "Shape is abstract class";
    }
  }
  calcArea() {}
  calcParameter() {}
}
Shape.prototype.toString = function () {
  return `Area: ${this.calcArea()}, Parameter: ${this.calcParameter()}`;
};

