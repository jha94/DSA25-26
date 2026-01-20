const maxArea = (heights) => {
    let left = 0;
    let right = heights.length - 1
    let max = 0;
    for (let index = 0; index < heights.length; index++) {
        max = Math.max(max, (Math.min(heights[left], heights[right]) * (right - left)))
        if (heights[left] < heights[right]) {
            left++
        } else {
            right--
        }
    }
    return max
}

console.log(maxArea([, , ]))