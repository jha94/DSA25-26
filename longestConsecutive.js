const longestConsecutive = (nums) => {
    if(nums.length===0) return 0

    // it creates duplicates and sorts the array and then scans to find longest consecutive sequence.
    // Which is 0(nlogn) due to sorting

    // const uniqueSortedArr = [...new Set(nums)].sort((a, b) => a - b)
    // let res = 0;
    // let current = 1
    // for (let index = 0; index < uniqueSortedArr.length; index++) {
    //     if (uniqueSortedArr[index] + 1 === uniqueSortedArr[index + 1]) {
    //         current++
    //     } else {
    //         res = Math.max(res, current)
    //         current = 1
    //     }
    // }
    // return res

    // w/o sorting complexity is 0(n)
    
    const set = new Set(nums);
    let maxlength = 0
    for(let num of set){
        if(!set.has(num-1)){
            let current = num
            let length = 1
            while(set.has(current+1)){
                current++
                length++
            }
            maxlength = Math.max(maxlength, length)
        }
    }
    return maxlength
}
console.log(longestConsecutive([2, 20, 21, 22, 23, 24, 25, 4, 10, 3, 4, 5]))