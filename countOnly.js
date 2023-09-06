const countOnly = function (allItems, itemsToCount) {
  // Create an empty object called results to store the counts of each item
  // in the array.
  const results = {};
  // Loop through the allItems array
  for (const item of allItems) {
    // If the current item is in the itemsToCount object
    if (itemsToCount[item]) {
      // If we've already seen this item, increment its count by 1
      if (results[item]) {
        results[item] += 1;
        // Otherwise initialize its count to 1
      } else {
        results[item] = 1;
      }
    }
  }
  // Return the results object
  return results;
};
// Export the function
module.exports = countOnly;
