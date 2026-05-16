// https://www.testdome.com/questions/node-js/get-in-parallel/113274

function getInParallel(apiCalls) {
  return Promise.all(apiCalls.map((x) => x()));
}

let promise = getInParallel([
  () => Promise.resolve("First API call!"),
  () => Promise.resolve("Second API call!")
]);
if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}
module.exports.getInParallel = getInParallel;
