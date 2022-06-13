// ********************* EVENT LOOP ******************** //

function toPromiseCallBack(resolve, reject) {
  let x = 2 + 2;
  if (x == 4) {
    resolve("All good mate");
  } else {
    reject("Not good...");
  }
}

let p = new Promise(toPromiseCallBack);

function forThen(something) {
  console.log(`I called from then ${something}`);
}

p.then((something) => console.log(`I called from then ${something}`)).catch(
  (err) => console.log(`I'm form catch ${err}`)
);

async function abc() {
  try {
    console.log("a");
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("b"), 3000);
    });
    // run only after promise resolve
    console.log(result);
    console.log("c");
  } catch (error) {
    console.error(" I'm from catch " + error);
  }
}

abc();
