// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  // make sure there are at least two inputs
  if (!(object1 && object2)) {
    return false;
  }
  //check if length of keys equal
  // extract keys and check length equality
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  // check if keys match
  // loop through each key array and check if match at arr2[i]
  for (let i = 0; i < obj1Keys; i++) {
    for (let j = 0; j < obj2Keys; j++) {
      if (obj1Keys[i] !== obj2Keys[j]) {
        return false;
      }
    }
  }

  // extract values of each obj, save to variable and compare equality at each
  // index location
  const obj1Values = Object.values(object1);
  const obj2Values = Object.values(object2);

  for (let key of obj1Keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  //
  const inspect = require('util').inspect; // <= add this line
  !eqObjects(actual, expected)
    ? console.log(`🛑 The two objects are not identical: ${inspect(expected)}`)
    : console.log(`✅ The two objects are identical: ${inspect(actual)}`);
};

/* const assertArraysEqual = (a, b) => {
  !eqArrays(a, b)
    ? console.log('🛑 The two arrays are not identical.')
    : console.log('✅ The two arrays are identical.');
}; */
