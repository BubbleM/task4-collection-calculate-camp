'use strict';
var rank_asc = function(collection){
  collection.sort(function (a, b) {
    return a < b ? 1 : -1;
  });
  return collection;
};

module.exports = rank_asc;
