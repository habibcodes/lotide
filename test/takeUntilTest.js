// Import Module
const takeUntil = require('../takeUntil');
const assert = require('chai').assert;


describe('takeUntil', () => {
  it("returns every element in the array [1, 2, 5, 7, 2] when it reaches a number less zero", () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(input, (x) => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });
  it("returns every element in the array [1, 2, 5, 7, 2] when it reaches a number less zero", () => {
    const input = [
      "I've",
      'been',
      'to',
      'Hollywood',
      ',',
      "I've",
      'been',
      'to',
      'Redwood',
    ];
    const result = takeUntil(input, (x) => x === ',');
    assert.deepEqual(result, ["I've", 'been', 'to', 'Hollywood']);
  });
});