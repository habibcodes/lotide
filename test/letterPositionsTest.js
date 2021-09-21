// Import Module
const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('letterPositions', () => {
  it("returns the letter 'l' from the string 'lighthouse in the house' when index [0] is passed in as an argument", () => {
    const result = letterPositions('lighthouse in the house').l;
    assert.deepEqual(result, [0]), [0];
  });
});