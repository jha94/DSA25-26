const maxSum = (nums, window) => {
  let sum = 0;
  let maxSum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
    if (index >= window) {
      sum -= nums[index - window];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};
// console.log(maxSum([2, 1, 5, 1, 3, 2], 3));

const minSubArrLength = (nums, target) => {
  let sum = 0;
  let minWindow = Infinity;
  let left = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
    while (sum >= target) {
      minWindow = Math.min(minWindow, index - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minWindow === Infinity ? 0 : minWindow;
};
console.log(minSubArrLength([2, 1, 5, 2, 3, 2], 10));

const lengthOfLongestSubstring = (str) => {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  for (let char of str) {
    while (set.has(char)) {
      set.delete(str[left]);
      left++;
    }
    set.add(char);
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
};
// console.log(lengthOfLongestSubstring("abcabcdb"));

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
  const set = new Set();
  for (let index = 0; index < nums.length; index++) {
    if (set.has(nums[index])) {
      return true;
    }
    set.add(nums[index]);
    if (set.size > k) {
      set.delete(nums[index - k]);
    }
  }
  return false;
};
// console.log(containsNearbyDuplicate([2, 1, 2], 1));

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  let count1 = new Array(26).fill(0);
  let count2 = new Array(26).fill(0);

  for (let index = 0; index < s1.length; index++) {
    count1[s1.charCodeAt(index) - 97]++;
    count2[s2.charCodeAt(index) - 97]++;
  }

  const match = () => {
    for (let index = 0; index < s1.length; index++) {
      if (count1[index] !== count2[index]) return false;
    }
    return true;
  };
  if (match()) return true;

  for (let index = s1.length; index < s2.length; index++) {
    count2[s2.charCodeAt(index) - 97]++;
    count2[s2.charCodeAt(index - s1.length) - 97]--;
    if (match()) return true;
  }
  return false;
};
// console.log(checkInclusion("abc", "lecaabee"));
