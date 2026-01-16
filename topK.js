const topK = (nums, k) => {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    const bucket = Array(nums.length + 1).fill().map(() => [])
    for (let [num, freq] of map) {
        bucket[freq].push(num)
    }
    const res = []
    for (let index = bucket.length - 1; index > 0 && res.length < k; index--) {
        for (let num of bucket[index]) {
            res.push(num)
            if (res.length === k) return res
        }
    }
}


console.log(topK([1, 2, 2, 2, 3, 3, 3], 2))