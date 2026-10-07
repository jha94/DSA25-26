const removeElement = (nums, val) => {
  let i = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) {
      nums[i] = nums[index];
      i++;
    }
  }
  return i;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
