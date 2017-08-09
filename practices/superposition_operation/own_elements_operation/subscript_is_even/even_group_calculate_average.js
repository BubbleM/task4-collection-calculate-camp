'use strict';
var even_group_calculate_average = function(collection){
  let result = [];
  let evenIndex = getEvenIndex(collection);
  let even = getEvenArr(evenIndex);
  let resultObj = spiltArrWithLength(even);
  if (resultObj.oneLength.length !== 0) {
    result.push(getAverage(resultObj.oneLength));
  }
  if (resultObj.twoLength.length !== 0) {
    result.push(getAverage(resultObj.twoLength));
  }
  if (resultObj.threeLength.length !== 0) {
    result.push(getAverage(resultObj.threeLength));
  }
  if (resultObj.oneLength.length === 0 && resultObj.twoLength.length === 0 && resultObj.threeLength.length === 0) {
    result.push(0);
  }
  return result;
};

function getEvenIndex(collection) {
  let even = [];
  for (let i = 1; i < collection.length + 1; i++) {
    if (i % 2 === 0) {
      even.push(collection[i - 1]);
    }
  }
  return even;
}

function getEvenArr(collection) {
  let result = [];
  collection.forEach(item => {
    if (item % 2 === 0) {
      result.push(item);
    }
  })
  return result;
}


function spiltArrWithLength(collection) {
  let obj = {
    oneLength: [],
    twoLength: [],
    threeLength: []
  };
  collection.forEach(item => {
    if (item > 0 && item < 10) {
      obj.oneLength.push(item);
    } else if (item < 100) {
      obj.twoLength.push(item);
    } else {
      obj.threeLength.push(item);
    }
  });
  return obj;
}

function getAverage(collection) {
  let total = 0;
  collection.forEach(item => {
    total += item;
  });
  return total / collection.length;
}

module.exports = even_group_calculate_average;
