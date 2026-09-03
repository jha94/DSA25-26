const twoSum = (nums, target) => {
  let seen = new Map();
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    if (seen.has(diff)) {
      return [seen.get(diff), index];
    } else {
      seen.set(nums[index], index);
    }
  }
};
console.log(twoSum([3, 4, 5, 6], 7));
