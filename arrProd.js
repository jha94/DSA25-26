const productExceptSelf = (nums) => {
    // const res  = [];
    // for(let index=0;index<nums.length;index++){
    //     let prod = 1
    //     for(let ind=0;ind<nums.length;ind++){
    //         if(index!==ind)
    //         prod*=nums[ind]
    //     }
    //     res.push(prod)
    //     prod = 1
    //     continue
    // }
    // return res
    const res = new Array(nums.length).fill(1)
    let prefix = 1;
    for(let index=0;index<nums.length;index++){
        res[index] = prefix
        prefix*=nums[index]
    }
    let suffix = 1;
    for(let index=nums.length-1;index>=0;index--){
        res[index]*=suffix
        suffix*=nums[index]
    }
    return res
}
console.log(productExceptSelf([0, 2, 0, 4]))