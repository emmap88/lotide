const eqArrays = require("./eqArrays"); // import eqArrays function

const assertArraysEqual = function (arr1, arr2) {
  // assertArraysEqual compares two arrays
  if (eqArrays(arr1, arr2)) {
    // if eqArrays returns true (arrays are equal)
    console.log("✅✅✅ Assertion Passed: ", arr1, "===", arr2);
    // print success message
  } else {
    // otherwise, print failure message
    console.log("🛑🛑🛑 Assertion Failed: ", arr1, "!==", arr2);
  }
};
// Export the function
module.exports = assertArraysEqual; 
