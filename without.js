/*
    - Implement without(); which will return a subset of a given array, removing unwanted elements.
    - This function should take in a source array and a itemsToRemove array.
    - It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/

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

module.exports = without;