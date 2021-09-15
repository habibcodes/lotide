/*
    - Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console
    - The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison
    - unable to use assertions (test code) for this one
    - you can and should call the function below its declaration and visually ensure that the message printed to the console is accurate
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
  //
  // if (!eqArrays(a, b)) {
  //   console.log('The two arrays are not identical.');
  // } else {
  //   console.log('The two arrays are identical.');
  // }

  !eqArrays(a, b)
    ? console.log('🛑 The two arrays are not identical.')
    : console.log('✅ The two arrays are identical.');
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
