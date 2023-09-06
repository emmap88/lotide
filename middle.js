const middle = function (arr) {
  // If the array has less than 3 elements, return an empty array
  if (arr.length < 3) return [];
  // Calculate the middle index of the array by floor dividing the length by 2
  const mid = Math.floor(arr.length / 2);
  // Check if array length is odd or even
  return arr.length % 2
    ? // If odd, return the middle element
      arr.slice(mid, mid + 1)
    : // If even, return the two middle elements
      arr.slice(mid - 1, mid + 1);
};
// Export the function
module.exports = middle;
