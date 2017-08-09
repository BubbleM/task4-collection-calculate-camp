'use strict';

function get_letter_interval_2(number_a, number_b) {
  let arr = [];
  if (number_a === number_b) {
    arr.push(NumToChar(number_a));
  } else if(number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      arr.push(NumToChar(i));
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      arr.push(NumToChar(i));
    }
  }
  return arr;
}

function NumToChar(num) {
  if(num > 0 && num <= 26) return String.fromCharCode(num + 96);
  else if(num === 52) {
    return 'az';
  } else {
    let str = '';
    let first = parseInt(num / 26);
    str += String.fromCharCode(first + 96);
    let second = num % 26;
    str += String.fromCharCode(second + 96);
    return str;
  }
}

module.exports = get_letter_interval_2;
