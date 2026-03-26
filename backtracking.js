// console.log(isPowerOfTwo(7));
// console.log(fib(3));
// console.log(permutation([1, 2]));
// console.log(subsets([1, 2, 2]));
// console.log(wordPermutation("CODE"));
// console.log(combinationSum([1, 2, 2], 3));

const partition = (string) => {
  const res = [];

  const isPolindrome = (str, start, end) => {
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
    }
    return true;
  };

  const backtrack = (curr, index) => {
    if (index === string.length) {
      res.push([...curr]);
      return;
    }
    for (let ind = index; ind < string.length; ind++) {
      if (isPolindrome(string, index, ind)) {
        curr.push(string.substring(index, ind + 1));
        backtrack(curr, ind + 1);
        curr.pop();
      }
    }
  };
  backtrack([], 0);
  return res;
};

console.log(partition("aab"));
