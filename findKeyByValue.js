/*
    - Implement the function findKeyByValue which takes in an object and a value. 
    - It should scan the object and return the first key which contains the given value. 
    - If no key with that given value is found, then it should return undefined.
*/

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed 🛑: [${actual}] !== [${expected}]`);
  } else {
    console.log(`Assertion Passed ✅: [${actual}] === [${expected}]`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

const findKeyByValue = (object, value) => {
  // // pull keys
  // const keys = Object.keys(object);
  // // console.log(keys);

  // // loop and find target
  // for (let value of Object.keys(object)) {
  //   if (value === object[value]) {
  //     console.log(key);
  //   }
  // }
  return Object.keys(object).find((key) => object[key] === value);
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
// test
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
