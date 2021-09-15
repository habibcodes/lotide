/*
    - implement countOnly.
    - This function should take in a collection of items and return counts for a specific subset of those items.
    - It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others
    - items will be Strings only
    - use assertEqual
    - countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed
    - As shown in the example image above, only keys which have a truthy value should be counted in the resulting object.
    - All other strings (either set to false or not included at all in the object) should not be counted.
    -That said, if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.
*/

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed 🛑: [${actual}] !== [${expected}]`);
  } else {
    console.log(`Assertion Passed ✅: [${actual}] === [${expected}]`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  // create container obj
  const result = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

// test
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);
