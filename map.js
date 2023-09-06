const map = function (array, callback) {
  // Initialize an empty array to store the results
  const results = [];
  // Loop through each item in the array
  for (let item of array) {
    // Call the callback function, passing in the item
    // And push the result of the callback to the results array
    results.push(callback(item));
  }
  // Return the results array
  return results;
};
// Export the function
module.exports = map;
