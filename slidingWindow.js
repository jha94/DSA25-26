
const maxSum = (arr, k) => {
  let sum = 0;
  let maxSum = 0
  for(let index=0;index<arr.length;index++){
    sum+=arr[index]
    if(index>=k){
      sum-=arr[index-k]
    }
    if(index>=k-1){
      maxSum = Math.max(maxSum, sum)
    }
  }
  return maxSum
}

// console.log(maxSum([2, 1, 5, 1, 3, 2], 3));

const minSubArrLength = (arr, target) => {
  let sum = 0;
  let minWindowSize = 0
  let left = 0
  for(let index=0;index<arr.length;index++){
    sum+=arr[index]
    while(sum>=target){
      minWindowSize = Math.min(minWindowSize, index-left+1)
      sum-=arr[left]
      left++
    }
  }
  console.log(minWindowSize);
}
minSubArrLength([2, 1, 5, 2, 3, 2], 7);

const lengthOfLongestSubstring = (s) => {
  if (s?.length === 0) return 0;
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  for (let index = 0; index < s.length; index++) {
    while (set.has(s[index])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[index]);
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
};

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
