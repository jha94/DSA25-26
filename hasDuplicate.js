// function hasDuplicate(nums) {
//   return new Set([...nums]).size !== nums.length;
// }
// Time complexity:- new Set(nums) construction is O(n) and .size and .length are O(1).
// Total: O(n) time, O(n) space. This is optimal for unsorted input.

function hasDuplicate(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
}
// set takes twice memory than array. so for large array we should avoid using set.
// time complexity :- nums.sort((a, b) => a - b) (n), for for loop it's logn
// space complexity is o(1)
console.log(hasDuplicate([1, 1]));
