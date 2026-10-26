const productExceptSelf = (nums) => {
  let n = nums.length;
  let res = new Array(n).fill(1);

  // First pass: calculate the product of all elements to the left of each element
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    res[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Second pass: calculate the product of all elements to the right of each element
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return res;
};
console.log(productExceptSelf([1, 2, 4, 6]));
