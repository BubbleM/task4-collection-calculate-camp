'use strict';

var even_asc_odd_desc = function(collection){
  let even = [];
  let ogg = [];
  collection.forEach(item => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      ogg.push(item);
    }
  });
  even.sort(function (a, b) {
    return a - b;
  });
  ogg.sort(function (a, b) {
    return b - a;
  });
  return even.concat(ogg);
};
module.exports = even_asc_odd_desc;

