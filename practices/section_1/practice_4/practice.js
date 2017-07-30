function collect_same_elements(collection_a, object_b) {
  let result = [];
  collection_a.filter(item => {
    if(collection_b.value.includes(item.key)) result.push(item.key);
  })
  return result;
}

module.exports = collect_same_elements;
