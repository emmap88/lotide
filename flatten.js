const flatten = function(arr) {
  // newArray empty array called is initialized
  let newArray = [];
  //for loop to iterarte through each in arr
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArray.push(arr[i]);
    }
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(arr[i]);
    }
  }
  return newArray;
};
module.exports = flatten;