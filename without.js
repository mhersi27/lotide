const assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2);

  if (result) {
    console.log(`✅✅✅  Arrays are equal: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴🔴🔴  Arrays are not equal: [${array1}] !== [${array2}]`);
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

const without = function (original, itemsToRemove) {
  let expectedArray = [];

  if (!original.length) {
    console.log(`[${original}] original array is empty. No items to exclude`);
    return;
  }

  for (let i = 0; i < original.length; i++) {
    let excludeItem = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      excludeItem = false;
      if (original[i] === itemsToRemove[j]) {
        excludeItem = true;
        break;
      }
    }
    if (!excludeItem) {
      expectedArray.push(original[i]);
    }
  }

  console.log(
    `[${original}] Array after excluding items [${itemsToRemove}] : [${expectedArray}]`
  );
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]