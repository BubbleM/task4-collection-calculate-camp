'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  collection_a.forEach(itemA => {
    collection_b.forEach(itemB => {
      if(itemA % itemB === 0) result.push(itemA);
    });
  });
  return result;
}

module.exports = choose_divisible_integer;
