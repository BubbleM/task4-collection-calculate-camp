'use strict';

function compute_median(collection) {
  let result;
  collection.sort((a, b) => a - b > 0 ? 1 : -1);
  if (collection.length % 2 === 0) {
    result = (collection[parseInt(collection.length / 2)] + collection[parseInt(collection.length / 2) - 1]) / 2;
  } else {
    result = collection[parseInt(collection.length / 2)];
  }
  return result;
}

module.exports = compute_median;
