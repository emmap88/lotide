const flatten = function (arr) {
  // newArray empty array called is initialized 
  let newArray = [];
  //for loop to iterarte through each in arr
  for (let i = 0; i < arr.length; i++) {
    //in the for loop each elment of the arr is checked if it is an array. If it is not a array it pushes to newArray
    if (!Array.isArray(arr[i])) {
      newArray.push(arr[i]);
    }
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(arr[i]);
    }
  }
  // return function 
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));