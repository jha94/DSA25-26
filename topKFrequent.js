const topKFrequent = (nums, k) => {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    const bucket = Array(nums.length + 1).fill().map(() => [])
    for (let [value, freq] of map) {
        bucket[freq].push(value)
    }
    let result = []
    for (let index = bucket.length - 1; index >= 0 && result.length < k; index--) {
        for (let value of bucket[index]) {
            result.push(value)
            if (result.length === k) return result
        }
    }
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2))