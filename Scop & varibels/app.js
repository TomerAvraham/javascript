// Don't use var
var a;
function foo() {
  a = "10";
}

// let
let c = true;
let x;
function boo() {
  let b = "yes";
  console.log(c);
}
// console.log(b); Error Uncaught ReferenceError: b is not defined

// const
// const z; Error Uncaught SyntaxError: Missing initializer in const declaration
const something = 10;
function printConst() {
  const FuncScop = "value";
  console.log(something);
}
// console.log(funcScop); Error Uncaught ReferenceError: funcScop is not defined

const willNotChange = "const";
let willChange = "let";

// Use back tack (``) and not +
let firstName = "John";
let lastName = "Doe";
let job = "developer";
let age = 40;

let summery =
  "my name is " +
  firstName +
  " " +
  lastName +
  "my age is " +
  age +
  "i work as " +
  job;

let summeryBetter = `
my name is ${firstName} ${lastName}
    my age is ${age}
    i work as ${job}`;
