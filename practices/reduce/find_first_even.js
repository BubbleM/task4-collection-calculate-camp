'use strict';

function find_first_even(collection) {
  let result;
  collection.reverse().forEach(item => {
    if(item % 2 === 0) result = item;
  });
  return result;
}

module.exports = find_first_even;

