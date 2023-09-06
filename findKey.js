const findKey = (obj, callback) => {
  // Loop through each key in the object
  for (const key in obj) {
    // Call the callback function, passing in the value associated with the current key
    if (callback(obj[key])) {
      // If the callback returns true, return the current key
      return key;
    }
  }
};
// Export the function
module.exports = findKey;
