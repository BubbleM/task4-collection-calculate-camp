function count_same_elements(collection) {
  var result = [];
  collection.filter((a) => {
    if (!exist(a, result)) { // 如果当前对象在对象数组中不存在,在添加新对象到数组中
      result.push({key: a, count: 1})
    }
  })
  return result;
}

/*
 * 如果当前数据a在对象数组里存在　则给当前对象的count+1 返回true
 * 否则返回false
 * */
var exist = (a, arrObj) => {
  var boolean = false;
  arrObj.filter((item) => {
    if (a === item.key) {
      item.count++;
      boolean = true;
    }
  })
  return boolean;
};

module.exports = count_same_elements;
