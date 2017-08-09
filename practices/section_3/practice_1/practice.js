function create_updated_collection(collection_a, object_b) {
  /*遍历collectionA中的每一项,如果当前项的key存在与objectB.value中　对其count项减１*/
  collectionA.map((a) => {
    if (exist(a.key, objectB)) a.count--;
  })
  return collectionA;
}
/*
 * 查找a是否在对象数组中　如果在返回true否则返回false
 * @param a 查找值
 * @param object 对象数组 如{value: ['a', 'd', 'e', 'f']};
 * */
var exist = (a, object) => {
  if (object.value.indexOf(a) !== -1) return true;
  return false
};

module.exports = create_updated_collection;
