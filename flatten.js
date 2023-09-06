const flatten = function (arr) {
  // newArray empty array called is initialized
  let newArray = [];
  //for loop to iterarte through each element in arr
  for (let i = 0; i < arr.length; i++) {
    // If the element is not an array, push it directly to the new array
    if (!Array.isArray(arr[i])) {
      newArray.push(arr[i]);
    }
    // If the element is an array, concatenate it to the new array
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(arr[i]);
    }
  }
  // Return the flattened array
  return newArray;
};
// Export the function
module.exports = flatten;
