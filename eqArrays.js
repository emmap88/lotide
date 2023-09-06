const eqArrays = function (arr1, arr2) {
  // Check if the lengths of the two arrays are equal
  // If not, return false right away
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Loop through each element in the arrays
  for (let i = 0; i < arr1.length; i++) {
    // Check if both elements are arrays
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // Call eqArrays recursively to compare nested arrays
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      // Else compare the values directly
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // If loop completes, arrays are equal
  return true;
};
// Export the function
module.exports = eqArrays;
