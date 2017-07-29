'use strict';

function choose_no_repeat_number(collection) {
  /*
  * new Set(collection) 将数组去重　Set { 1, 2, 3, 4 }
  * Array.from(Set) 将Set结构转换为真的数组
  * */
  return Array.from(new Set(collection));
}

module.exports = choose_no_repeat_number;
