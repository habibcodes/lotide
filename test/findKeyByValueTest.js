// Import Module
const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('findKeyByValue', () => {
  it('returns category of "drama" when passed "The Wire"', () => {
    const bestTVShowsByGenre = {
      sciFi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it('returns undefined when passed a show not in the object', () => {
    const bestTVShowsByGenre = {
      sciFi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });
});