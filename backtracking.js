const isPowerOfTwo = (number) => {
  const check = (num, divider) => {
    if (num % divider === 0) return true;
    if (num % divider === 1 || num % divider < 0) return false;
    return check(num, divider * 2);
  };
  return check(number, 2);
};
// console.log(isPowerOfTwo(7));

const fib = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
};
// console.log(fib(3));

const permutation = (nums) => {
  const res = [];
  const getPermutations = (curr, index) => {
    if (index === nums.length) {
      res.push([...curr]);
      return;
    }
    for (let ind = index; ind < nums.length; ind++) {
      [nums[index], nums[ind]] = [nums[ind], nums[index]];
      getPermutations(nums, ind + 1);
      [nums[index], nums[ind]] = [nums[ind], nums[index]];
    }
  };
  getPermutations([], 0);
  return res;
};
// console.log(permutation([1, 2]));

const subsets = (nums) => {
  const res = [];
  const getSubsets = (curr, index) => {
    for (let ind = index; ind < nums.length; ind++) {
      curr.push(nums[ind]);
      res.push([...curr]);
      getSubsets(curr, ind + 1);
      curr.pop();
    }
  };
  getSubsets([], 0);
  const hash = {};
  for (let el of res) {
    if (hash[el]) continue;
    hash[el] = el;
  }
  return Object.values(hash);
};
// console.log(subsets([1, 2, 2]));

const wordPermutation = (word) => {
  const res = [];
  const getPermutation = (curr, visited) => {
    if (curr.length === word.length) {
      res.push(curr.join(""));
      return;
    }
    for (let index = 0; index < word.length; index++) {
      if (visited.has(index)) continue;
      curr.push(word[index]);
      visited.add(index);
      getPermutation(curr, visited);
      curr.pop();
      visited.delete(index);
    }
  };
  getPermutation([], new Set());
  return res;
};
// console.log(wordPermutation("CODE"));
