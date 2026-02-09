const missingNumber = (nums) => {
    for(let index=0;index<nums.length;index++){
        if(!nums.includes(index)){
            return index
        }
    }
    return nums.length
}

console.log(missingNumber([0,1]))