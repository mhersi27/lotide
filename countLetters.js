const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const results = {};
  for (const character of string) {
    if (character !== " ") {
      if (results[character]) {
        results[character] += 1;
      } else {
        results[character] = 1;
      }
    }
  }
  return results;
};

const stringToCheck = "lighthouse in the best";
const Check = countLetters(stringToCheck);