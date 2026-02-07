const minInRotated = (nums) => {
    let min = Infinity
    
    let left = 0;
    let right = nums.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]<=min){
            min = nums[mid]
        } 
        if(nums[left]<=nums[mid]){
            if(min<nums[mid]&&min>=nums[left]){
                right = mid-1
            } else{
                left = mid+1
            }
        } else{
            if(min>nums[mid] && min<=nums[right]){
                left = mid+1
            } else{
                right = mid-1
            }
        }
    }
    return min
}

console.log(minInRotated([4,5,6,7]))