function count_same_elements(collection) {
  var result = [];
  collection.filter((a) => {
    if (filters(a)) {
      let str = filters(a);
      if (!exist(str.name, result, str.summary)) {
        result.push({name: str.name, summary: str.summary});
      }
    } else {
      if (!exist(a, result, 1)) {
        result.push({name: a, summary: 1});
      }
    }
  })
  return result;
}

/*
 * 对数组中的元素进行过滤
 * */
var filters = (str) => {
  var strobj = {};
  if (str[1] === '-') { // 处理'd-5'格式的数据
    let strs = str.split('-');
    strobj.name = strs[0];
    strobj.summary = strs[1]-0; // 将字符串转换为数字
    return strobj;
  } else if (str[1] === ':') { // 处理'c:8'格式的字符串
    let strs = str.split(':');
    strobj.name = strs[0];
    strobj.summary = strs[1]-0;
    return strobj;
  } else if (str[1] === '[') {　// 处理t[10]格式的字符串
    let strs = str.split('[');
    strobj.name = strs[0];
    strobj.summary = strs[1].split(']')[0]-0;
    return strobj;
  }
  else {
    return false;
  }
}

var exist = (a, arrObj, count) => {
  var boolean = false;
  arrObj.filter((item) => {
    if (a === item.name) {
      item.summary += count;
      boolean = true;
    }
  })
  return boolean;
};
module.exports = count_same_elements;
