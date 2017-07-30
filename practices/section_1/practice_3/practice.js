function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(item => {
    let result = false;
    if(collection_b.value.includes(item)) result = true;
    return result;
  })
}

module.exports = collect_same_elements;
