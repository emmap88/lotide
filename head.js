const assertEqual = require('./assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2, 3);

const head = (arr) => {
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
module.exports = head;
