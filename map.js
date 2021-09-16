// make map func //

/*
    - Our map function will take in two arguments:
        - An array to map
        - A callback function
    - The map function will return a new array based on the results of the callback function.
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

const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = function (array, callback) {
  // temp code
  //   console.log('array: ', array);
  //   console.log('callback: ', callback);

  //
  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word + '77');
const results3 = map(words, (word) => word.length % 2);
// console.log(results3);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [
  'ground77',
  'control77',
  'to77',
  'major77',
  'tom77',
]);
assertArraysEqual(results3, [0, 1, 0, 1, 1]);
