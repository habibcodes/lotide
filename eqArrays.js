/* eslint-disable space-before-function-paren */
/*
    - implement a function that can compare two arrays for a perfect match

*/

// Import Module
const assertEqual = require('./assertEqual');


// FUNCTION IMPLEMENTATION
const eqArrays = (a, b) => {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqArrays;