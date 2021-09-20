// Module Import
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

// TEST CODE
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);
// // Comparing identical strings
// assertEqual('Five', 'Five');
// // Comparing non-identical strings
// assertEqual('Five', '5');
// // Comparing identical numbers
// assertEqual(5, 5);
// // Comparing non-identical numbers
// assertEqual(5, 25);


// test
describe('assertEqual', () => {
  it('returns true if two strings are strictly equal', () => {
    assert.equal('Five', 'Five');
  });
  it('returns false if two values are not strictly equal', () => {
    assert.notEqual('Five', 5);
  });
});