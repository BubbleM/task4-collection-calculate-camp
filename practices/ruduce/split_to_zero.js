'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  while(number > 0){
    result.push(number.toFixed(1));
    number -= interval;
  }
  if(number === 0) result.push(0);
  return result;
}

module.exports = spilt_to_zero;
var collection_a = [0.8, 0.6, 0.4, 0.2, 0]; // 0.8 0.2
var collection_b = [0.7, 0.4, 0.1, -0.2]; // 0.7 0.3
console.log(spilt_to_zero(0.8, 0.2));
