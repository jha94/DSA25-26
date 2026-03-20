var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  const val = (n, base) => {
    if (n - base === 0) return true;
    if (n - base < 0) return false;
    return val(n, base * 2);
  };
  return val(n, 2);
};
// console.log(isPowerOfTwo(3));

const fib = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};
// console.log(fib(4))

const subsets = (nums) => {
  const res = [];
  const getSubSets = (nums, index) => {
    if (index === nums.length) {
       res.push([...nums]);
       return
    }
    for (let ind = index; ind < nums.length; ind++) {
      [nums[index], nums[ind]] = [nums[ind], nums[index]];
      getSubSets(nums, index + 1)
      [nums[index], nums[ind]] = [nums[ind],nums[index]];
    }
  };
  getSubSets(nums, 0);
  return res;
};
subsets([1, 2]);
