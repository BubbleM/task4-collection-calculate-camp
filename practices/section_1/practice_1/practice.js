function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(item => {
    let result = false;
    if(collection_b.includes(item)) result = true;
    return result;
  })
}

module.exports = collect_same_elements;
