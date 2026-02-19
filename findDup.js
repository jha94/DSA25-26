const findDuplicate = (nums) => {
    // use set
    // let values = []
    // for (let num of nums) {
    //     if (values.includes(num)) {
    //         return num
    //     }
    //     values.push(num)
    // }

    let fast = nums[0]
    let slow = nums[0]
    while(true){
        fast = nums[nums[fast]]
        slow = nums[slow]
        if(fast===slow) break
    }
    slow = nums[0]
    while(fast!==slow){
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
}

console.log(findDuplicate([1, 2, 3, 2, 2]))