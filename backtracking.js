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
// console.log(permutation([1, 2]));

const subsets = (nums) => {
  const res = [[]];
  const getSubSets = (start, curr) => {
    for (let ind = start; ind < nums.length; ind++) {
      curr.push(nums[ind]);
      res.push([...curr]);
      getSubSets(ind + 1, curr);
      curr.pop();
    }
  };
  getSubSets(0, []);
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
  const permute = (arr, visitedIndices) => {
    if(arr.length===word.length){
      res.push(arr.join(''))
      return
    }
    for(let i=0;i<word.length;i++){
      if(visitedIndices.has(i)) continue
      arr.push(word[i])
      visitedIndices.add(i)
      permute(arr, visitedIndices)
      arr.pop()
      visitedIndices.delete(i)
    }
  }
  permute([], new Set())
  return res
}
// console.log(wordPermutation("CODE"));


