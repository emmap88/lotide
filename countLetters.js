const assertEqual = require("./assertEqual");

const countLetter = function (string) {
  const result = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
}
console.log(countLetter("lighthouse in the house"));
