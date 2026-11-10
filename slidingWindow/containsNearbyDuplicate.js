const containsNearbyDuplicate = (nums, k) => {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index]) && index - map.get(nums[index]) <= k) return true;
    map.set(nums[index], index);
  }
  return false;
};
console.log(containsNearbyDuplicate([2, 1, 2], 1));
