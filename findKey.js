// implement findKeyByValue with callbacks /

/* const findKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
}; */

const findKey = (object, callback) => {
  // loop over object until key-value evaluates to true via callback below
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;