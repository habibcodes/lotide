// Import Module
const middle = require('../middle');
const assert = require('chai').assert;



// Test

describe('middle', () => {
  it('returns [] if given an array with one number [1]', () => {
    const result = middle[1];
    console.log(result);
    assert.deepEqual(middle[1]), [];
  });
  /* it('returns [] if given an array with two numbers [1, 2]', () => {
    assert.deepEqual(middle[1, 2], []);
  });
  it('returns [2] if given an array with an odd number of elements [1, 2, 3]', () => {
    assert.deepEqual(middle[1, 2], []);
  });
  it('returns [3, 4] if given an array with an even number of elements [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle[1, 2, 3, 4, 5, 6], [3, 4]);
  }); */

});

/* // console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
//
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
// ---- //
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
//
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// --- //
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
//
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); */