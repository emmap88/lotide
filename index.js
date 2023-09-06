// index.js
const head = require("./head"); // gets head function from head.js
const tail = require("./tail"); // gets tail function from tail.js
const middle = require("./middle"); // gets middle function from middle.js
const assertArraysEqual = require("./assertArraysEqual"); // gets assertArraysEqual function from assertArraysEqual.js
const assertEqual = require("./assertEqual"); // gets assertEqual function from assertEqual.js
const assertObjectsEqual = require("./assertObjectsEqual"); // gets assertObjectsEqual function from assertObjectsEqual.js
const countLetters = require("./countLetters"); // gets countLetters function from countLetters.js
const countOnly = require("./countOnly"); // gets countOnly function from countOnly.js
const eqArrays = require("./eqArrays"); // gets eqArrays function from eqArrays.js
const eqObjects = require("./eqObjects"); // gets eqObjects function from eqObjects.js
const findKey = require("./findKey"); // get findKey function from findKey.js
const findKeyByValue = require("./findKeyByValue"); // get findKeyByValue function from findKeyByValue.js
const flatten = require("./flatten"); // get flatten function from flatten.js
const letterPositions = require("./letterPositions"); // get letterPositions function from letterPositions.js
const map = require("./map"); // get map function from map.js
const takeUntil = require("./takeUntil"); // get takeUntil function from takeUntil.js
const without = require("./without"); // get without function from without.js

module.exports = {
  // exports all functions
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,
};
