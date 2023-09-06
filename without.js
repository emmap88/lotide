const without = function (arr1, arr2) {
  // Validate input
  // If either array is falsy, return empty array
  if (!arr1 || !arr2) {
    return [];
  }
  // Initialize empty result array
  let result = [];
  // Loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    // Check if current element is NOT in arr2
    if (!arr2.includes(arr1[i])) {
      // If not found, push element to result array
      result.push(arr1[i]);
    }
  }
  // Return result array without elements from arr2
  return result;
};
// Export function
module.exports = without;
