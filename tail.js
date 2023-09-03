// const assertEqual = require('./assertEqual');

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const tail = (newArr) => {
  {
    return newArr.slice(1);
  //return newArr.splice(1)
  }
};
module.exports = tail;
/* Test Case: Check the original array*/
// assertEqual(tail(["Yo Yo", "Lighthouse", " Labs"]), "Labs");
// const words = ["Yo Yo", " Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

