// const assertEqual = require("./assertEqual");
// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");

const middle = function(arr) {
  if (arr.length < 3) return [];

  const mid = Math.floor(arr.length / 2);

  return arr.length % 2 ?
    arr.slice(mid, mid + 1) : // Odd
    arr.slice(mid - 1, mid + 1); // Even

};

module.exports = middle;

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
