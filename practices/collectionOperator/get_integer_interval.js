'use strict';

function get_interval (number_max, number_min) {
	let arr = [];
	for (let i = number_min; i <= number_max; i++) {
		arr.push(i);
	}
	return arr;
}

function get_integer_interval(number_a, number_b) {
  if (number_a > number_b) return get_interval(number_a, number_b).reverse();
  if (number_a < number_b) return get_interval(number_b, number_a);
  return [number_b];
}

module.exports = get_integer_interval;
