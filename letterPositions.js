const letterPositions = function (sentence) {
  // Initialize result as an empty object
  const result = {};
  // Loop through each character in the sentence string
  for (let i = 0; i < sentence.length; i++) {
    // If result already contains the current letter
    if (result[sentence[i]]) {
      // Push the current index to the array for that letter
      result[sentence[i]].push(i);
    } // Otherwise if result does not already contain the letter
    else {
      // Initialize the array for that letter with the current index
      result[sentence[i]] = [i];
    }
  }
  // Return the result object mapping letters to array of indices
  return result;
};
// Export the function
module.exports = letterPositions;
