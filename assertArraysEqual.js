const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2){
  if(arr1, arr2){
    console.log("✅✅✅ Assertion Passed: ", arr1, "===", arr2); 
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", arr1, "!==", arr2); 
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);