var checkSubarraySum = (nums, k) => {
    let preSum = 0;
    for(let index=0;index<nums.length;index++){
        preSum+=nums[index]
        if(preSum%k==0){
            return index
        }
    }

};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))