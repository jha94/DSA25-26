const maxArea = (heights) => {
    if(heights.length===0) return 0
    let maxArea = 0;
    let left = 0;
    let right = heights.length-1
    // almost optimal 0(n). issues :- index is never used, always runs n times

    // for(let index=0;index<heights.length;index++){
    //     maxArea = Math.max(maxArea, (Math.min(heights[left], heights[right])*(right-left)))
    //     if(heights[left]>=heights[right]){
    //         right--
    //     } else{
    //         left++
    //     }
    // }

    // now this is FAANG/MAANG
    while(left<right){
        const height = Math.min(heights[left], heights[right]);
        const width = right-left
        maxArea = Math.max(maxArea, (height*width))
        if(heights[left]>heights[right]){
            right--
        } else{
            left++
        }
    }
    return maxArea
}

console.log(maxArea([2, 2, 2]))