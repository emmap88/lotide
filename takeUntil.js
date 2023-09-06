const takeUntil = function (array, callback) {
  // Initialize a new array to store the results
  let newArray = [];
  // Loop through the input array
  for (const i in array) {
    // If callback returns true, stop the loop
    if (callback(array[i])) {
      break;
    } // Otherwise add the element to the results array
    else {
      newArray.push(array[i]);
    }
  }
  // Return the results array
  return newArray;
};
// Export the function
module.exports = takeUntil;
