const hasDuplicate = (nums) => {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};
console.log(hasDuplicate([2]));
