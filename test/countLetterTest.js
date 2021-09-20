// Import Module
// const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');
const assert = require('chai').assert;

// Test

describe('countLetter', () => {
  it('should return a count of each letter in a string', () => {
    const result = countLetters('Sentence');
    assert.deepEqual(result, { S: 1, e: 3, n: 2, t: 1, c: 1 });
  });
});

