const searchMatrix = (matrix, target) => {
    const array = []
    matrix.map((value) => {
        array.push(...value)
    })
    let left = 0;
    let right = array.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (array[mid] === target) {
            return true
        } else if (array[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
}

console.log(searchMatrix([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 10))