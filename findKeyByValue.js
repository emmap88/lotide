const findKeyByValue = function (object, value) {
  // Loop through each key in the object
  for (const key in object) {
    // If the value at the current key matches the target value
    if (object[key] === value) {
      // Return the matching key
      return key;
    }
  }
};
// Export the function
module.exports = findKeyByValue;
