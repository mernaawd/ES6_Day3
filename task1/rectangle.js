import Shape from "/shape.js";
export default class Rectangle extends Shape {
  constructor(width, length) {
    super();
    this.width = width;
    this.length = length;
  }
}
Rectangle.prototype.calcArea = function () {
  return this.width * this.length;
};
Rectangle.prototype.calcParameter = function () {
  return this.calcArea() * 2;
};
