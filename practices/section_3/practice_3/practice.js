function create_updated_collection(collection_a, object_b) {
  var collectionC = countSameElements(collectionA);
  collectionC.map((a) => {
    if (exist1(a.key, objectB)) cut3_1(a);
  })
  return collectionC;
}

/*
 * 统计出A集合中相同的元素的个数，形成C集合
 * */
function countSameElements(collection) {
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

/*
 * 对当前对象的count执行满3减1操作
 * @obj 对象形如{key: 'a', count: 3}
 * */
let cut3_1 = (obj) => {
  let count = Math.floor(obj.count / 3);
  for (let i = 0; i < count; i++) {
    obj.count--;
  }
}

let exist1 = (a, object) => {
  if (object.value.indexOf(a) !== -1) return true;
  return false
};

module.exports = create_updated_collection;
