// Import Module
const tail = require('../tail');
const assert = require('chai').assert;

describe('tail', () => {
  it("returns ['Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs'] array", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [2, 3, 4] from the array [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
});