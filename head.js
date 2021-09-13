// head - retrieve index-0 of any array //

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed 🛑: [${actual}] !== [${expected}]`);
  } else {
    console.log(`Assertion Passed ✅: [${actual}] === [${expected}]`);
  }
};

// head func
const head = (array) => {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
// one el array
assertEqual(head([5]), 5);
// empty array
assertEqual(head([]));
