# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emmap/lotide`

**Require it:**

`const _ = require('@emmap/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: Assertion check for eqArrays function.
* assertEqual: Uses strict comparison on two values to test equality.
* assertObjectsEqual: Assertion check for eqObjects function.
* countLetters: Take in a string and then return a count of each of the letters in that string.
* countOnly: Takes in a collection of items and return counts for a specific subset of those items.
* eqArrays: Calls eqArrays and returns a message to console if arrays are the same.
* eqObjects: Function that can compare two arrays for a perfect match.
* findKey: Checks if key exists in object and returns value of that key.
* findKeyByValue: Search for a key on an object where its value matches a given value.
* flatten: Flattens an array of arrays into a single array.
* head: Returns the first element of an array.
* letterPositions: Return all the indices (zero-based positions) in the string where each character is found.
* map: The map function will return a new array based on the results of the callback function.
* middle: Returns the middle value of an array. If array is even, returns the middle two.
* tail: Returns an array with the first element removed.
* takeUntil: Takes all the values out of an array or string until specified condition is met.
* without: Removes unwanted items from an array and returns a new array without those items.