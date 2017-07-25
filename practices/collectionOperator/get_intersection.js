'use strict';

function get_intersection(collection_a, collection_b) {
  return Array.from(new Set(collection_b.filter(x => collection_a.includes(x))));
}

module.exports = get_intersection;
