// Import Module
const map = require('../map');
const assert = require('chai').assert;

// Test
describe('map', () => {
  it("returns an array with the first letter of every element in the array ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const result = map(words, (word) => word[0]);
    assert.deepEqual(result, ['g', 'c', 't', 'm', 't']);
  });
  it("returns an array with the modulo of every element's length in the array ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const result = map(words, (word) => word.length % 2);
    assert.deepEqual(result, [0, 1, 0, 1, 1]);
  });
});
