// Import Modules
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;



// test
describe('#assertArraysEqual', () => {
  it('returns [1, 2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(assertArraysEqual[1, 2, 3]), [1, 2, 3];
  });
});