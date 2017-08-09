'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  while(number > 0){
    result.push(number.toFixed(1) - 0);
    number -= interval;
  }
  if (result[result.length - 1] !== 0) {
    result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
