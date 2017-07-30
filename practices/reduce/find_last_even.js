'use strict';

function find_last_even(collection) {
  let result;
  collection.forEach(item => {
    if(item % 2 === 0) result = item;
  });
  return result;
}

module.exports = find_last_even;
