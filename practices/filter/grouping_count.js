'use strict';

function grouping_count(collection) {
  let result = {}; /*{'1':2}*/
  collection.forEach(item => {
    if (result[item]){
      result[item]++;
    } else {
      result[item] = 1;
    }
  });
  return result;
}

module.exports = grouping_count;