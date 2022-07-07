function handleRequest(path) {
  if (path === "/random") {
    return readJson("joke.json");
  }
  if (path === "/list") {
    return readJson("jsonList.json");
  }
}

function readJson(fileName) {
  return "JSON";
}
