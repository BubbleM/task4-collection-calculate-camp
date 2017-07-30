'use strict';

function hybrid_operation_to_uneven(collection) {
  let total = [];
  collection.forEach(item => {
    if(item % 2 !== 0){
      total.push(item * 3 + 2);
    }
  });
  return total;
}

module.exports = hybrid_operation_to_uneven;

