/*
    - We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
    - For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

    - Use assertArraysEqual to compare the 4 letters and their expected positions. There is a tip about how to write this line of code in the Tips section below, in case you are stuck.
    - You should expect your test to fail but also have an idea of what the error message will likely be, before you run your code
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

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    // extract chars for and push to results obj as keys
    if (sentence[i] !== ' ') {
      if (!(sentence[i] in results)) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions('lighthouse in the house').l, [0]);
