// Import Module
const without = require('../without');
const assert = require('chai').assert;


/* without([1, 2, 3], [1]); // => [2, 3]
without(['1', '2', '3'], [1, 2, '3']); // => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']); */

describe('without', () => {
  it("returns [2, 3] when given [1, 2, 3]", () => {
    const result = without([1, 2, 3], [1]);
    console.log('######' + result);
    assert.deepEqual(result, [2, 3]);
  });
});