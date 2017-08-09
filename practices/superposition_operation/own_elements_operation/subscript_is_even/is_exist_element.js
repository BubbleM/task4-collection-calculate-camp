'use strict';
var is_exist_element = function(collection,element){
  let result = [];
  for(let i = 1; i < collection.length; i++) {
    if (i % 2 === 0){
      result.push(collection[i]);
    }
  }
  return result.includes(element);
};
module.exports = is_exist_element;
