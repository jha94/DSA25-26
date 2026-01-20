const maxArea = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let max = 0;
    while (left < right) {
        const width = right - left;
        const height = Math.min(heights[left], heights[right]);
        max = Math.max(max, width * height);
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};


console.log(maxArea([, ,]))