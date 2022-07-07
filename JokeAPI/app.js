// 1. target dom elements - Done
// 2. random click - Done
// 3. add options to select - Done
// 4. get joke via category

// DOM elements
const random = document.querySelector("[data-random]");
const select = document.querySelector("[data-select]");
const form = document.querySelector("[data-form]");
const jokeEl = document.querySelector("[data-joke]");

async function handleRandomPick() {
  jokeEl.innerHTML = "<h1>Loading...</h1>";
  const { value: joke } = await callApi("random");
  jokeEl.innerHTML = `<h1>${joke}</h1>`;
}

async function callApi(url) {
  try {
    url = `https://api.chucknorris.io/jokes/${url}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    alert("Something went wrong");
  }
}

async function addOptionsToSelect() {
  const categories = await callApi("categories");
  const elementArr = categories.map((c) => {
    return `<option value="${c}" >${c}</option>`;
  });
  select.innerHTML = elementArr.join("");
}

// 1. prevent submit refresh - Done
// 2. show loading - Done
// 3. get select value - Done
// 4. send request via select value - Done
// 5. display joke
async function handleSubmit(e) {
  e.preventDefault();
  jokeEl.innerHTML = "<h1>Loading...</h1>";
  const category = select.value;
  const { value: joke } = await callApi(`random?category=${category}`);
  jokeEl.innerHTML = `<h1>${joke}</h1>`;
}

// Events
random.addEventListener("click", handleRandomPick);
form.addEventListener("submit", handleSubmit);

addOptionsToSelect();

// let person = {
//   name: "John",
// };
// const { name: firstName } = person;
// console.log(firstName);
