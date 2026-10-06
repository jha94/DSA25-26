const twoSum = (nums, target) => {
  if (nums.length === 0 || target === null || target === undefined) {
    return [-1, -1];
  }
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    if (map.has(diff)) {
      return [map.get(diff), index];
    }
    map.set(nums[index], index);
  }
  return [-1, -1];
};
console.log(twoSum([3, 4, 5, 6], 7));
