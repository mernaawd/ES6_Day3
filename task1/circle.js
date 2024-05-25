import Shape from "/shape.js";
export default class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
}
Circle.prototype.calcArea = function () {
  return Math.PI * this.radius * this.radius;
};
Circle.prototype.calcParameter = function () {
  return Math.PI * this.radius * 2;
};
