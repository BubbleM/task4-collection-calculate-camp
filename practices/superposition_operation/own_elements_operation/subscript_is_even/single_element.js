'use strict';
var single_element = function(collection){
  let result = [];
  let repet = [];
  for (let i = 1; i < collection.length + 1; i++) {
    if (repet.includes(collection[i])){
      break;
    }
    if (i % 2 === 0) {
      if (result.includes(collection[i - 1])){
        repet.push(collection[i - 1]);
        let index = result.indexOf(collection[i - 1]);
        result.splice(index, 1); // 删除重复元素
        continue;
      }
      result.push(collection[i-1]);
    }
  }
  return result;
};
module.exports = single_element;
