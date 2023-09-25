const tail = function (arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // cases
// const result1 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result1.length, 2);
// assertEqual(result1[0], "Lighthouse");
// assertEqual(result1[1], "Labs");

// const result2 = tail([1, 2, 3]);
// assertEqual(result2.length, 2);
// assertEqual(result2[0], 2);
// assertEqual(result2[1], 3);

// const result3 = tail(["Yo Yo"]);
// assertEqual(result3.length, 0);

// const result4 = tail([]);
// assertEqual(result4.length, 0);

module.exports = tail;