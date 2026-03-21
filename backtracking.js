const isPowerOfTwo = (n) => {
  const check = (n, val) => {
    if (n - val === 0) return true;
    if (n - val === 1 || n - val < 0) return false;
    return check(n, val * 2);
  };
  return check(n, 2);
};
// console.log(isPowerOfTwo(1));

const fib = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
};
// console.log(fib(3));

const permutation = (nums) => {
  const res = [];
  const getPermutations = (nums, index) => {
    if (index === nums.length) {
      res.push([...nums]);
      return;
    }
    for (let ind = index; ind < nums.length; ind++) {
      [nums[ind], nums[index]] = [nums[index], nums[ind]];
      getPermutations(nums, ind + 1);
      [nums[ind], nums[index]] = [nums[index], nums[ind]];
    }
  };
  getPermutations(nums, 0);
  return res;
};
console.log(permutation([1, 2]));
