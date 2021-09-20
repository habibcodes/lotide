/*
  - Create a function called countLetters.
  - The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
  - For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
*/

// FUNCTION IMPLEMENTATION
const countLetters = function(string) {
  // initialise container obj for counted chars
  const result = {};
  // loop using for...of each char in string
  for (let letter of string) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  return result;
};

// const output = countLetters('LHL');

//  test
// assertEqual(output['L'], 2);
// assertEqual(output['H'], 1);

module.exports = countLetters;