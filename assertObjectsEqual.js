const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual, expected) {
    console.log("✅✅✅ Assertion Passed: ", actual, "===", inspect(expected));
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", actual, "!==", inspect(expected));
  }
};
module.exports = assertObjectsEqual;
