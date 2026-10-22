const removeDuplicates = (nums) => {
    const unique = [...new Set(nums)];
    for(let index=0;index<unique.length;index++){
        nums[index] = unique[index]
    }
    return unique.length
}
console.log(removeDuplicates([2,10,10,30,30,30]))
