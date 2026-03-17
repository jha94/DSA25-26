const maxSum = (arr, length) => {
  let sum = 0;
  let maxSum = 0;
  let left = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    if (index >= length) {
      sum -= arr[left];
      maxSum = Math.max(maxSum, sum);
      left++;
    }
  }
  return maxSum;
};
console.log(maxSum([2, 1, 5, 17, 3, 2], 3));

const minSubArrLength = (elements, sum) => {
  let size = Infinity
  let total = 0
  let left = 0
  for(let index=0;index<elements.length;index++){
    total+=elements[index]
    while(total>=sum){
      total-=elements[left]
      size = Math.min(size, index-left+1)
      left++
    }
  }
  return size
}
console.log(minSubArrLength([2, 1, 5, 5, 10, 2, 3, 2], 10));

const lengthOfLongestSubstring = (str) => {
  const set = new Set();
  let left = 0;
  let size = 0
  for(let char of str){
    while(set.has(char)){
      set.delete(str[left])
      left++
    }
    set.add(char)
    size = Math.max(size, set.size)
  }
  return size
}
console.log(lengthOfLongestSubstring("abcabcdefbcdefgh"));

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let profit = 0;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  }
  return profit;
};
// console.log(maxProfit([10, 1, 5, 6, 7, 1]));

const containsNearbyDuplicate = (arr, window) => {
  const set = new Set();
  let left = 0;
  for (let index = 0; index < arr.length; index++) {
    if (set.has(arr[index])) return true;
    if (set.size >= window) {
      set.delete(arr[left]);
      left++;
    }
    set.add(arr[index]);
  }
  return false;
};
// console.log(containsNearbyDuplicate([1, 2, 1], 1));

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
      return true;
    }
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

const findClosestElement = (arr, k, x) => {
  const map = new Map();
  for (let element of arr) {
    map.set(element, Math.abs(x - element));
  }
  return [...map]
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map((arr) => arr[0])
    .sort((a, b) => a - b);
};
// console.log(findClosestElement([2, 4, 5, 8], 2, 6));
