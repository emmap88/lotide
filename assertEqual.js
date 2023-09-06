const assertEqual = function (actual, expected) {
  // Compare actual and expected values
  if (actual === expected) {
    // If equal, print success message
    console.log("✅✅✅ Assertion Passed: " + (actual + " === " + expected));
  } else if (actual !== expected) {
    // If not equal, print failure message
    console.log("🛑🛑🛑 Assertion Failed: " + (actual + " !== " + expected));
  }
};
// Export the function
module.exports = assertEqual;
