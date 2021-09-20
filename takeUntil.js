/*
    - Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
    - It will take in two parameters as well:
        - The callback (which Lodash calls "predicate")
        - The array to work with
    - The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
    - To keep things simple, the callback should only be provided one value: The item in the array.

    Pseudo = 1. loop through array, 2. if item in array triggers callback to evaluate to "true" 3. log that index location, 4. pass that index location to the second parameter of the slice(start, [ i ])
*/

const takeUntil = function(array, callback) {
  // let result = [];
  // something to hold the new array values in
  // loop over array until reach an el that evaluates
  // callback condition to true
  for (let index in array) {
    if (callback(array[index])) {
      // console.log(array[index]);
      return array.slice(0, index);
    }
  }
};

module.exports = takeUntil;