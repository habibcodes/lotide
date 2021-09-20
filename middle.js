/*
    - create func that returns middle value in array
    - The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
    - For arrays with one or two elements, there is no middle. Return an empty array.
    - For arrays with odd number of elements, an array containing a single middle element should be returned.
    - For arrays with an even number of elements, an array containing the two elements in the middle should be returned

    Pseudo:
    // create empty array
    // if array.length < 3, return empty array
    // if array.length % 2 !== 0, it is odd
      // push single value
    // if array.length % 2 === 0, it is even
      // find index of middle two and push both
    // return
*/

// Import Modules

// Implement Function
const middle = (array) => {
  // create empty arr
  const result = [];

  // check if less than 3
  if (array.length < 3) {
    return result;
  } else {
    if (array.length % 2 !== 0) {
      let oddMiddle = array[Math.floor(array.length / 2)];
      result.push(oddMiddle);
      // console.log(oddMiddle);
    } else {
      let evenMiddle1 = array[Math.floor((array.length - 1) / 2)];
      let evenMiddle2 = array[Math.floor(array.length / 2)];
      result.push(evenMiddle1, evenMiddle2);
    }
  }

  // find middle index and return
  return result;
};

module.exports = middle;