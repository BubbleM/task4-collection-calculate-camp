function create_updated_collection(collection_a, object_b) {
  collectionA.map((a) => {
    if (exist(a.key, objectB)) cut3_1(a);
  })
  return collectionA;
}

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

let exist = (a, object) => {
  if (object.value.indexOf(a) !== -1) return true;
  return false
};
module.exports = create_updated_collection;
