const maxArea = (heights) => {
    // let res = 0;
    // for(let index=0;index<heights.length;index++){
    //     for(let ind = index+1;ind<heights.length;ind++){
    //         res = Math.max(Math.min(heights[index], heights[ind])*(ind-index), res)
    //     }
    // }
    // return res
    let left = 0;
    let right = heights.length-1
    let max = 0
    while(left<right){
        const height = Math.min(heights[left], heights[right])
        let width = right-left
        max = Math.max(max, height*width)
        if(heights[left]>heights[right]){
            right--
        } else{
            left++
        }
    }
    return max
}

console.log(maxArea([1,7,2,5,12,3,500,500,7,8,4,7,3,6]))