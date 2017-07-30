'use strict';

function hybrid_operation_to_uneven(collection) {
  let total = 0;
  collection.forEach(item => {
    if(item % 2 !== 0){
      total += (item * 3 + 5);
    }
  });
  return total;
}

module.exports = hybrid_operation_to_uneven;
