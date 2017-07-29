'use strict';

let change = function (num) {
  if(num > 0 && num < 26) return String.fromCharCode(num + 96);
  else{
    let str = '';
    let first = parseInt(num / 26);
    str += String.fromCharCode(first + 96);
    let second = num % 26;
    str += String.fromCharCode(second + 96);
    return str;
  }
}

var number_map_to_word_over_26 = function(collection){
  let result = [];
  collection.forEach(item => {
    result.push(change(item));
  })
  return result;
};

module.exports = number_map_to_word_over_26;