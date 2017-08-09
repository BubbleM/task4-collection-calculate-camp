'use strict';

function get_letter_interval(number_a, number_b) {
  if (number_a > number_b) return get_interval(number_a, number_b).reverse();
  if (number_a < number_b) return get_interval(number_b, number_a);
  return get_interval(number_a, number_b);
}

function get_interval (number_max, number_min) {
	let arr = [];
	if (number_max === number_min) {
		arr.push(String.fromCharCode(number_max+96));
	} else {
		for (let i = number_min+96; i <= number_max+96; i++) {
			arr.push(String.fromCharCode(i));
		}
	}
	return arr;
}

module.exports = get_letter_interval;
