const longestConsecutive = (nums) => {
    nums.sort((a, b) => a - b);
    let smallest = nums[0];
    let res = 1;
    for (let num of nums) {
        if (num === smallest + 1) {
            res++
        }
        smallest = num
    }
    return res
}

console.log(longestConsecutive([1, 0, 1, 2]))