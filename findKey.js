// implement findKeyByValue with callbacks /

/* const findKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
}; */

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed 🛑: [${actual}] !== [${expected}]`);
  } else {
    console.log(`Assertion Passed ✅: [${actual}] === [${expected}]`);
  }
};

const findKey = (object, callback) => {
  //   console.log(Object.values(object));
  // loop over object until key-value evaluates to true via callback below
  for (let key in object) {
    // console.log(key);
    // console.log(object[key].stars);
    if (callback(object[key])) {
      return key;
    }
    // return Object.entries(object);
  }
};

// test

assertEqual(
  findKey(
    {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  'noma'
); // => "noma"
