// Import Module
const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  //
  const inspect = require('util').inspect; // <= add this line
  !eqObjects(actual, expected)
    ? console.log(`🛑 The two objects are not identical: ${inspect(expected)}`)
    : console.log(`✅ The two objects are identical: ${inspect(actual)}`);
};

module.exports = assertObjectsEqual;