const merge = (nums1, m, nums2, n) => {
  let i = m-1;
  let j = n-1;
  let k = nums1.length-1
  while(i>=0 && j>=0){
    if(nums1[i]>nums2[j]){
      nums1[k] = nums1[i];
      i--
    } else{
      nums1[k] = nums2[j];
      j--
    }
    k--;
  }

  while(j>=0){
    nums1[k] = nums2[j]
    k--;
    j--;
  }
  return nums1
};
console.log(merge([10, 20, 20, 40, 0, 0], 4, [1, 2], 2));
