/*
    - Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console
    - The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison
    - unable to use assertions (test code) for this one
    - you can and should call the function below its declaration and visually ensure that the message printed to the console is accurate
*/

// Import Modules
const eqArrays = require('./eqArrays');

const assertArraysEqual = (a, b) => {
  !eqArrays(a, b)
    ? console.log('🛑 The two arrays are not identical.')
    : console.log('✅ The two arrays are identical.');
};

module.exports = assertArraysEqual;
