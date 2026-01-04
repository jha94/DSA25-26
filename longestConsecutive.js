const longestConsecutive = (nums) => {
    if (nums.length === 0) return 0;
    const set = new Set(nums);
    let longest = 0;
    for (let num of set) {
        // only start sequence if it's the beginning
        if (!set.has(num - 1)) {
            let current = num;
            let streak = 1;
            while (set.has(current + 1)) {
                current++;
                streak++;
            }
            longest = Math.max(longest, streak);
        }
    }
    return longest;
};


console.log(longestConsecutive([1, 0, 1, 2]))