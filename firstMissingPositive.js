const firstMissingPositive = (nums) => {
  if (nums.length <= 0) return 1;
  const uniquePositives = new Set();
  nums.forEach((num) => {
    if (num > 0) {
      uniquePositives.add(num);
    }
  });
  for (let index = 1; index <= nums.length + 1; index++) {
    if (!uniquePositives.has(index)) return index;
  }
  return nums.length + 1;
};
console.log(firstMissingPositive([1, 2, 4, 5, 6, 3, 1]));
