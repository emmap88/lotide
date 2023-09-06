const eqArrays = require("./eqArrays");

const eqObjects = function (obj1, obj2) {
  // First check if the objects have the same number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    // If not, objects are not equal
    return false;
  } else {
    // Loop through all keys in obj1
    for (let key in obj1) {
      // If the key contains an array, compare arrays
      if (Array.isArray(obj1[key])) {
        // Call eqArrays function to compare arrays
        if (eqArrays(obj1[key], obj2[key]) === false) {
          // If arrays not equal, objects not equal
          return false;
        }
      } // If key contains an object, recursively compare objects
      else if (typeof obj1[key] === "object") {
        if (eqObjects(obj1[key], obj2[key]) === false) {
          // If nested objects not equal, objects not equal
          return false;
        }
      }
      // If neither array nor object, compare values
      else if (obj1[key] !== obj2[key]) {
        // If values not equal, objects not equal
        return false;
      }
    }
  }
  // If all keys and values are equal, return true
  return true;
};
// Export the function
module.exports = eqObjects;
