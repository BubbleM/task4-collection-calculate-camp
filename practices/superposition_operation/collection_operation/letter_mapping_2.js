'use strict';

function average_to_letter(collection) {
  let total = 0;
  collection.forEach(item => {
    total += item;
  });
  let index = parseInt(total/collection.length);
  return String.fromCharCode(index+96);
}

module.exports = average_to_letter;

var collection = [1,2,3,4,5,6,7,8,9,10];
console.log(average_to_letter(collection))