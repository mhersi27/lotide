const findKeyByValue = function (item, value) {
  for (const key in item) {
    if (item[key] === value) {
      return key;
    }
  }
};