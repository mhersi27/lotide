const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = (obj1, obj2) => {
  const objOneKeys = Object.keys(obj1);
  const objTwoKeys = Object.keys(obj2);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }

  for (let key of objOneKeys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }

    if (object1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};