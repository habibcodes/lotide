/*
  - Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
*/

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed 🛑: [${actual}] !== [${expected}]`);
  } else {
    console.log(`Assertion Passed ✅: [${actual}] === [${expected}]`);
  }
};

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

  // !!! PROBLEM, CHECKS ORDE
  for (let key of obj1Keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
  // console.log(obj1Values);
  // console.log(obj2Values);
  // console.log(true);
};

// tests
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(eqObjects(ab, ba));

assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(abc), false);

/*
The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well).

The order of the array returned by Object.entries() is the same as that provided by a for...in loop. If there is a need for different ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.
*/

/*
Object.values()
The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
*/
