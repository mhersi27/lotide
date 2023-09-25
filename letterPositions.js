const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Arrays are equal: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴🔴🔴 Arrays are not equal: [${array1}] !== [${array2}]`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1 === null && array2 === null) {
    return true;
  }
  if (array1 === undefined || array2 === undefined) {
    if (array1 === array2) {
      return true;
    }
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const letterPositions = function (str) {
  const results = {};
  str = str.replace(" ", "");

  for (let i = 0; i < str.length; i++) {
    if (!results[str[i]]) results[str[i]] = [i];
    else results[str[i]].push(i);
  }

  return results;
};

// console.log(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]));