'use strict';
var calculate_median = function(collection){
  let even = [];
  for (let i = 1; i < collection.length + 1; i++) {
    if (i % 2 === 0) {
      even.push(collection[i - 1]);
    }
  }
  return getMedian(even);
};

function getMedian(arr) {
  let result;
  if (arr.length % 2 === 0) {
    result = (arr[parseInt(arr.length / 2)] + arr[parseInt(arr.length / 2) - 1]) / 2;
  } else {
    result = arr[parseInt(arr.length / 2)];
  }
  return result;
}

module.exports = calculate_median;
