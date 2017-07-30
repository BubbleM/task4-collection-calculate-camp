'use strict';

function hybrid_operation(collection) {
  let total = 0;
  collection.forEach(item => {
    total += (item *3)+2;
  });
  return total;
}

module.exports = hybrid_operation;

