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

// const ab = {
//   a: "1",
//   b: "2"
// };

// const ba = {
//   b: "2",
//   a: "1"
// };

// assertObjectsEqual(ab, ba);



