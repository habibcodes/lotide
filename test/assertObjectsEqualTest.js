// Module Import
// const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

// Test
describe('assertObjectsEqual', () => {
  it('returns true if two objects have deep equality', () => {
    assert.deepEqual({tea: 'green'}, {tea: 'green'});
  });
  it('returns false if two objects do not have deep equality', () => {
    assert.notDeepEqual({tea: 'green'}, {tea: 'yellow'});
  });
});