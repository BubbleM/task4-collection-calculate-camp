'use strict';

function average_to_letter(collection) {
  let total = 0;
  collection.forEach(item => {
    total += item;
  });
  let index = Math.ceil(total / collection.length);
  return String.fromCharCode(index + 96);
}

module.exports = average_to_letter;
