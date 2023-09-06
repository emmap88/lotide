// Import eqObjects function to compare objects
const eqObjects = require("./eqObjects");
// assertObjectsEqual function compares two objects
const assertObjectsEqual = function (actual, expected) {
  // Import inspect from util to print objects
  const inspect = require("util").inspect;
  // If objects are equal
  if (eqObjects(actual, expected)) {
    // Print success message
    console.log("✅✅✅ Assertion Passed: ", actual, "===", inspect(expected));
  } else {
    // Print failure message
    console.log("🛑🛑🛑 Assertion Failed: ", actual, "!==", inspect(expected));
  }
};
// Export the function
module.exports = assertObjectsEqual;
