// tail - return last el in array //

// Import Module
const assertEqual = require('./assertEqual');


// Code Implementation
const tail = (array) => {
  // must not mutate array
  return array.slice(1);
};


module.exports = tail;