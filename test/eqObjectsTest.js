// Import Module
const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('eqObjects', () => {
  it("returns true if two objects share deep equality", () => {
    const ab = { a: '1', b: '2' };
    const ba = { b: '2', a: '1' };
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns false if two objects do not share deep equality", () => {
    const ab = { a: '1', b: '2' };
    const ba = { b: '2', a: '3' };
    assert.notDeepEqual(eqObjects(ab, ba));
  });
});