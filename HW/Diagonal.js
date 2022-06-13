// class Diagonal {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//
//   getWidth(){
//      return this.width;
//  }
// }

function Diagonal(width, height) {
  this.width = width;
  this.height = height;
}

Diagonal.prototype.getWidth = function () {
  return this.width;
};

Diagonal.prototype.getHeight = function () {
  return this.height;
};

Diagonal.prototype.setWidth = function (width) {
  this.width = width;
};

Diagonal.prototype.setHeight = function (height) {
  this.height = height;
};

Diagonal.prototype.getArea = function () {
  return this.width * this.height;
};

Diagonal.prototype.getDiagonal = function () {
  return Math.sqrt(this.width ** 2 + this.height ** 2).toFixed(2);
};

Diagonal.prototype.isBigger = function (anotherDiagonal) {
  return this.getArea() > anotherDiagonal.getArea();
};

Diagonal.prototype.isSmaller = function (anotherDiagonal) {
  return anotherDiagonal.isBigger(this);
};

Diagonal.prototype.printMe = function () {
  console.log(this);
};

const d1 = new Diagonal(2, 5);
let x = new Diagonal(4, 5);
