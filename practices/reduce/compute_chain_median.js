'use strict';

function compute_chain_median(collection) {
  let result;
  let arr = chain.split('->'); // [ '1', '4', '6', '2', '3', '10', '9', '8', '11', '20', '19', '30' ]
  for (let i = 0; i < arr.length; i++) {
    arr[i] -= 0;
  }
  arr.sort((a, b) => a - b > 0 ? 1 : -1);
  if (arr.length % 2 === 0) {
    result = (arr[parseInt(arr.length / 2)] + arr[parseInt(arr.length / 2) - 1]) / 2;
  } else {
    result = arr[parseInt(arr.length / 2)];
  }
  return result;
}

module.exports = compute_chain_median;
var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
console.log(compute_chain_median(chain))