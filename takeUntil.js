/*
    - Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
    - It will take in two parameters as well:
        - The callback (which Lodash calls "predicate")
        - The array to work with
    - The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
    - To keep things simple, the callback should only be provided one value: The item in the array.

    Pseudo = 1. loop through array, 2. if item in array triggers callback to evaluate to "true" 3. log that index location, 4. pass that index location to the second parameter of the slice(start, [ i ])
*/

const eqArrays = (a, b) => {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = (a, b) => {
  !eqArrays(a, b)
    ? console.log('🛑 The two arrays are not identical.')
    : console.log('✅ The two arrays are identical.');
};

const takeUntil = function (array, callback) {
  let result = [];
  // something to hold the new array values in
  // loop over array until reach an el that evaluates
  // callback condition to true
  for (let index in array) {
    if (callback(array[index])) {
      console.log(array[index]);

      return array.slice(0, index);
    }

    // value of end position paramater for slice log
    // console.log(callback(item));
  }
  // condition checked --> pass into callback
  // once true, return a slice of the array with elements from the beginning
  // slice logic, which pushes to container array
  // return
};

// test

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1); //
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, (x) => x === ',');
// console.log(results2); //
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
