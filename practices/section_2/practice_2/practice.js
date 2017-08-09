function count_same_elements(collection) {
  var result = [];
  collection.filter((a) => {
    if (!exist(a, result)) {
      if (filter(a)) {
        let str = filter(a);
        result.push({key: str.key, count: str.count});
      } else {
        result.push({key: a, count: 1})
      }
    }
  })
  return result;
}

/*
 * 对数组中的元素进行过滤
 * */
var filter = (str) => {
  var strobj = {};
  if (str.length !== 1) { // 处理'd-5'格式的数据
    var strs = str.split('-');
    strobj.key = strs[0];
    strobj.count = strs[1]-0; // 将字符串转换为数字
    return strobj;
  } else {
    return false;
  }
}

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
