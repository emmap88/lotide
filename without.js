const without = function(arr1, arr2) {
  let arr = [];

  if (arr1, arr2)
    return arr;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[0]) {
      arr.push(arr1[i]);
    }
  }
  return arr;
};

module.exports = without;
//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// //console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(words, ["hello", "world", "lighthouse"]);