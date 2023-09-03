const takeUntil = function(array, callback) {
  let newArray = [];
  for (const i in array) {
    if (callback(array[i])) {
      break;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
module.exports = takeUntil;
