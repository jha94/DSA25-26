const twoSum = (nums, target) => {
    const seen = new Map()
    for (let index = 0; index < nums.length; index++) {
        const remain = target - nums[index]
        if (seen.has(remain)) {
            return [seen.get(remain), index]
        }
        seen.set(nums[index], index)
    }
    return []
}


console.log(twoSum([5, 5, 5], 10))