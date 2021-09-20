// Module Import
const countOnly = require('../countOnly');
const assert = require('chai').assert;

// Test
// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);

// test
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe('countOnly', () => {
  it('returns the number of times a string is in an array', () => {
    assert.deepEqual(result, {'Jason': 1, 'Fang': 2});
  });
  it('returns undefined if key is not in the array', () => {
    assert.deepEqual(result['Agouhanna'], undefined);
  });
  it('returns undefined if key is false and also not in the array', () => {
    assert.deepEqual(result['Karima'], undefined);
  });
});