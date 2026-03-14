const maxSum = (arr, size) => {
  let sum = 0;
  let maxSum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    if (index >= size) {
      sum -= arr[index - size];
    }
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
};
console.log(maxSum([2, 1, 5, 1, 3, 2], 3));

// console.log(minSubArrLength([2, 1, 5, 2, 3, 2], 7));

// console.log(lengthOfLongestSubstring("abcabcbb"));

const maxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let price of prices) {
    if (minPrice > price) {
      minPrice = price;
    }
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
};

// console.log(maxProfit([10, 1, 5, 6, 7, 1]));

const containsNearbyDuplicate = (nums, k) => {
  const window = new Set();
  for (let index = 0; index < nums.length; index++) {
    if (window.has(nums[index])) return true;
    window.add(nums[index]);
    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
