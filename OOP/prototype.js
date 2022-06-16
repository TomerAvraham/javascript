function Person() {
  this.firstName = "John";
  this.lastName = "Doe";
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

Person.prototype.toString = function () {
  return "this is custom toString";
};

const a = "a";
// const a = new String("a")
const b = 10;
// const b = new Number(10);

const c = {};
// const c = new Object();

const d = [];
// const d = new Array();

const e = true;
// const e = new Boolean(true)

const animal = {
  name: "Lion",
  predator: true,
};

let p = Object.create(animal);
let lion = {};

// never do that demo only!!
lion.__proto__ = p;

// no!
let person = {
  firsName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firsName + " " + this.lastName;
  },
};

const john = new Person(); // better;

let jane = {
  firsName: "Jane",
  lastName: "Doe",
  getFullName: function () {
    return this.firsName + " " + this.lastName;
  },
  addresses: ["Main 111", "Sec 222"],
};

let obj = {};

function customArray() {}

customArray.prototype = Array;

console.log(new customArray());

class Developer extends Person {
  constructor() {
    super();
    this.firstName = "Dvir";
  }
}

console.log(new Developer());
