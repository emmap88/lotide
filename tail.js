const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + (actual + " === " + expected))
  }
  else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + (actual + " !== " + expected))
  }
}

assertEqual("Lighthouse Labs", "Bootcamp")
assertEqual(1, 1);

function tail(newArr)
{
  return newArr.slice(1)
  //return newArr.splice(1)
}

// Test Case: Check the original array 
assertEqual(tail(["Yo Yo", "Lighthouse", " Labs"]), "Labs");
const words = ["Yo Yo", " Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!