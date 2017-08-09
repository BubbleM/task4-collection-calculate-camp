'use strict';
var calculate_average = function(collection){
  let total = 0;
  let count = 0;
  for(let i = 0; i < collection.length; i++) {
    if (i && i % 2 === 0){
      total += collection[i];
      count++;
    }
  }
  return total / count;
};
module.exports = calculate_average;
