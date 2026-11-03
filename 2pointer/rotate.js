const rotate = (nums, k) => {
  if (nums.length <= 1) return nums;
  let pointer = 0;
  while (pointer < k) {
    const temp = nums.splice(-1);
    nums.unshift(...temp)
    pointer++
  }
  return nums
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 4));
