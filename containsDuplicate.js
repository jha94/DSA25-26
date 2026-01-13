// const containsDuplicate = (nums) => {
//     return nums.length !== new Set(nums).size
// }

const containsDuplicate = (nums) => {
    const seen = new Set();
    for(let num of nums){
        if(seen.has(num)) return true
        seen.add(num)
    }
    return false
}

console.log(containsDuplicate([1, 2, 3, 3]))