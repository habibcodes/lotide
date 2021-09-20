// tail - return last el in array //

// Code Implementation
const tail = (array) => {
  // must not mutate array
  return array.slice(1);
};

module.exports = tail;