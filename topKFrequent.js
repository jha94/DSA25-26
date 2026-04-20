const topKFrequent = (nums, k) => {
  const map = new Map();
  for (let value of nums) {
    map.set(value, (map.get(value) || 0) + 1);
  }
  const bucket = Array(nums.length+1)
    .fill()
    .map(() => []);
  for (let [key, value] of map) {
    bucket[value].push(key);
  }
  let result = [];
  for (
    let index = bucket.length - 1;
    index >= 0 && result.length < k;
    index--
  ) {
    for (let value of bucket[index]) {
      result.push(value);
    }
    if (result.length === k) return result;
  }
};

console.log(topKFrequent([7, 7, 7, 7], 1));
