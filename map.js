// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, (word) => word[0]);
// console.log(results1);

const map = function (array, callback) {
  const results = [];
  array.forEach((item) => {
    results.push(callback(item));
  });
  return results;
};