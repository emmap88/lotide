const countLetter = function (string) {
  // create result object
  const result = {};
  // loop through string
  for (let letter of string) {
    // if letter is not a space
    if (letter !== " ") {
      if (result[letter]) {
        // if letter is already in result
        result[letter] += 1; // add 1 to count
      } else {
        result[letter] = 1; // if letter is not in result, add it
      }
    }
  }
  return result; // return result object
};
// Export the function
module.exports = countLetter;
