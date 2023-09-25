const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("boy", true);

const findKeyByValue = function (item, value) {
  for (const key in item) {
    if (item[key] === value) {
      return key;
    }
  }
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");   Test Cases
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);