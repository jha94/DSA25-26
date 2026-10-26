const topKFrequent = (nums, k) => {
  if (!Array.isArray(nums) || k <= 0) return [];
  const freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  const sorted = [...freqMap].sort((a, b) => b[1] - a[1]);
  let result = [];
  for (let [key, value] of sorted) {
    if (result.length < k) {
      result.push(key);
      
    }
  }
  return result
    // return [...freqMap]
    //   .sort((a, b) => b[1] - a[1])
    //   .slice(0, k)
    //   .map((num) => num[0]);
};
console.log(topKFrequent([7, 7], 1));
