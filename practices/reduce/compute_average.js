'use strict';

function compute_average(collection) {
  let result = 0;
  collection.forEach(item => result += item)
  return result / collection.length;
}

module.exports = compute_average;
