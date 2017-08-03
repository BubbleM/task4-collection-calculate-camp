'use strict';

function average_uneven(collection) {
  let count = 0;
  let total = 0;
  collection.forEach(item => {
    if (item % 2 !== 0) {
      count++;
      total += item;
    }
  })
  return total/count;
}

module.exports = average_uneven;
