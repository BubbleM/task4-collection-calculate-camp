'use strict';

function median_to_letter(collection) {
  let median = 0;
  if (collection.length % 2 === 0) {
    median = (collection[Math.floor(collection.length / 2)] + collection[Math.floor(collection.length / 2) + 1]) / 2;
  } else {
    median = collection[Math.floor(collection.length / 2)];
  }
  return NumToChar(Math.floor(median));
}

function NumToChar(num) {
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

module.exports = median_to_letter;

