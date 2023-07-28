const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};
console.log(letterPositions("lighthouse in the house"));
//console.log(letterPositions("lighthouse in the house").e, [1]);