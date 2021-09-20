// Import Module
const findKey = require('../findKey');
const assert = require('chai').assert;



// test
describe('findKey', () => {
  it('returns "noma" based on callback value of exatly 2', () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };
    const callback = ((x) => x.stars === 2);

    assert.strictEqual(findKey(obj, callback), 'noma');
  });
});