// assertEquals - err checking func //

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed 🛑: [${actual}] !== [${expected}]`);
  } else {
    console.log(`Assertion Passed ✅: [${actual}] === [${expected}]`);
  }
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
// Comparing identical strings
assertEqual('Five', 'Five');
// Comparing non-identical strings
assertEqual('Five', '5');
// Comparing identical numbers
assertEqual(5, 5);
// Comparing non-identical numbers
assertEqual(5, 25);
