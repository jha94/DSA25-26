const singleNumber = (nums) => {
    const numberMap = new Map()
    for (let num of nums) {
        numberMap.set(num, (numberMap.get(num) || 0) + 1)
    }
    for (let [key, value] of numberMap) {
        if (value === 1) {
            return key
        }
    }
}
console.log(singleNumber([7, 6, 6, 7, 8]))