function printHey() {
  console.log("Hey");
}

function gonnaCallOtherFunc(cb) {
  console.log(cb);
}

function forEachElement(array, cb) {
  if (!Array.isArray(array)) throw new Error("First argument must be an array");
  if (typeof cb !== "function")
    throw new Error("Second argument must be a function");

  for (let i = 0; i < array.length; i++) {
    cb();
  }
}

forEachElement([5, 6, 8, 26], printHey);
