'use strict';

function get_integer_interval_2(number_a, number_b) {
  if (number_a > number_b) return get_interval(number_a, number_b).reverse();
  if (number_a < number_b) return get_interval(number_b, number_a);
  return [number_b];
}

function get_interval (number_max, number_min) {
	let arr = [];
	for (let i = number_min; i <= number_max; i++) {
		if (i % 2 === 0) arr.push(i);
	}
	return arr;
}

module.exports = get_integer_interval_2;
