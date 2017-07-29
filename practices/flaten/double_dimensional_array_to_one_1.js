'use strict';

function double_to_one(collection) {
  let result = [];
  collection.forEach(item => {
    if(item instanceof Array){
      for(let i of item){
        result.push(i);
      }
    }else{
      result.push(item);
    }
  });
  return result;
}

module.exports = double_to_one;
