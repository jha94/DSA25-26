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
// console.log(partition("aab"));

const combinations = (range, size) => {
  const res = [];
  let mainArr = [];
  for (let index = 1; index <= range; index++) {
    mainArr.push(index);
  }
  const getCombinations = (arr, start) => {
    if (arr.length === size) {
      res.push([...arr]);
      return;
    }
    for (let ind = start; ind < range; ind++) {
      arr.push(mainArr[ind]);
      getCombinations(arr, ind + 1);
      arr.pop();
    }
  };
  getCombinations([], 0);
  return res;
};
// console.log(combinations(3, 2));

// const wordPermutation = (str) => {
//   const res = []
//   const getWordPermutations = (string, index) => {
//     if(string.length===index){
//       res.push(string.join(''))
//       return
//     }
//     for(let ind=index;ind<string.length;ind++){
//       [string[index], string[ind]] = [string[ind], string[index]]
//       getWordPermutations(string, ind+1);
//       [string[index], string[ind]] = [string[ind], string[index]]
//     }
//   }
//   getWordPermutations(str.split(''), 0)
//   return res
// }
// console.log(wordPermutation("CODE"));

const combinationSum = (nums, target) => {
  const res = [];
  const getCombinations = (curr, targetSum, start) => {
    if (targetSum < 0) return;
    if (targetSum === 0) {
      res.push([...curr]);
      return;
    }
    for (let index = start; index < nums.length; index++) {
      curr.push(nums[index]);
      getCombinations(curr, targetSum - nums[index], index);
      curr.pop();
    }
  };
  getCombinations([], target, 0);
  return res;
};

// console.log(combinationSum([1, 2, 2], 3));
// console.log(combinationSum([3, 4, 5], 16));
