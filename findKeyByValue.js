const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const key = findKeyByValue(bestTVShowsByGenre, "The Wire");

console.log(bestTVShowsByGenre[key]); // "The Wire" 
console.log(key);

