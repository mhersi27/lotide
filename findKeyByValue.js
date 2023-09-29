const findKeyByValue = function(object, value){
  for (key in object){
    if (object[key] === value)
      return key
  }
  return undefined
}

module.exports = findKeyByValue;
