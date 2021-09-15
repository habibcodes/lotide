/*
    - Implement without(); which will return a subset of a given array, removing unwanted elements.
    - This function should take in a source array and a itemsToRemove array. 
    - It should return a new array with only those elements from source that are not present in the itemsToRemove array.
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

const without = (source, itemsToRemove) => {
  // initialise newArr
  const newArr = [];
  // loop and push els that are not in itemsToRemove param
  for (let i = 0; i < source.length; i++) {
    // if (!itemsToRemove.includes(source[i])) {
    //   newArr.push(source[i]);
    // }
    !itemsToRemove.includes(source[i]) ? null : newArr.push(source[i]);
  }
  console.log(newArr);
  return newArr;
};

without([1, 2, 3], [1]); // => [2, 3]
without(['1', '2', '3'], [1, 2, '3']); // => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
