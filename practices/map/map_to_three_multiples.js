'use strict';
var map_to_three_multiples = function(collections){
  let result = [];
  collections.forEach(item => {
    result.push(item * 3);
  })
  return result;
};

module.exports = map_to_three_multiples;

