'use strict';

function calculate_elements_sum(collection) {
  let result = 0; // 如果不赋默认值0,返回NaN
  collection.forEach(item => {
    result += item;
  })
  return result;
}

module.exports = calculate_elements_sum;
