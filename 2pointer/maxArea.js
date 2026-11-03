const maxArea = (heights) => {
  if (heights.length === 0) return 0;
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    let width = right - left;
    let minBar = Math.min(heights[left], heights[right]);
    maxArea = Math.max(maxArea, minBar * width);
    if (heights[left] > heights[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
console.log(maxArea([2, 2, 2]));
