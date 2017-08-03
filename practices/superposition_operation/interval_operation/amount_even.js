'use strict';

function amount_even(collection) {
  let total = 0;
  collection.forEach(item => {
    if (item % 2 === 0) total += item;
  })
  return total;
}

module.exports = amount_even;
