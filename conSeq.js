const longestConsecutive = (nums) => {
    const set = new Set(nums)
    let longest = 0
    for(let num of set){
        if(!set.has(num-1)){
            let current = num
            let streak = 1
            while(set.has(current+1)){
                current++
                streak++
            }
            longest = Math.max(current,streak)
        }
    }
    return longest
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))