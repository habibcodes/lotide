// make map func //

/*
    - Our map function will take in two arguments:
        - An array to map
        - A callback function
    - The map function will return a new array based on the results of the callback function.
*/

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

module.exports = map;