'use strict';
var number_map_to_word = function(collection){
  let result = [];
  collection.forEach(item => {
    result.push(String.fromCharCode(item+96));
  })
  return result;
};

module.exports = number_map_to_word;
