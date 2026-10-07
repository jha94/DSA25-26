const major = (nums) => {
  if (nums.length === 0) return null;
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [key, value] of map) {
    if (value >= nums.length / 2) {
      return key;
    }
  }
};
console.log(major([2, 2, 2]));
