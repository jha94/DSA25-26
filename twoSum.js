const twoSum = (nums, target) => {
  //   for (let index = 0; index < nums.length; index++) {
  //     const remain = target - nums[index];
  //     if (nums.indexOf(remain) !== -1) {
  //       return [index, nums.indexOf(remain)];
  //     }
  //   }
  //   return [];
  // time complexity of indexOf is o(n). That is inside for loop
  // total time complexity is o(n*n)
  // may return same index for duplicates [3, 3], 6 -> [0,0]

  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const remain = target - nums[index];
    if (map.has(remain)) {
      return [map.get(remain), index];
    }
    map.set(nums[index], index);
  }
  return [];
};

console.log(twoSum([3, 3], 6));
