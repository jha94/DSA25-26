const hasDuplicate = (nums) => {
  if (nums.length < 2) return false;
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};
console.log(hasDuplicate([2]));
