const majorityElement = (nums) => {
  if (!Array.isArray(nums)) {
    throw new Error("Input must be an array");
  }
  if (nums.length === 0) return [];
  const freq = new Map();
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  const result = [];
  for (let [key, value] of freq) {
    if (value > nums.length / 3) {
      result.push(key);
    }
  }
  return result.sort((a, b) => a - b);
};
console.log(majorityElement([4, 4, 4, 4, 4]));
