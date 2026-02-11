const findDuplicate = (nums) => {
    // let values = []
    // for (let num of nums) {
    //     if (values.includes(num)) {
    //         return num
    //     }
    //     values.push(num)
    // }

    let slow = nums[0]
    let fast = nums[0]

    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (fast === slow) break
    }

    slow = nums[0]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
}

console.log(findDuplicate([1, 2, 3, 2, 2]))