const twoSumSorted = (numbers, target) => {
    let left = 0;
    let right = numbers.length-1
    while(left<right){
        if(numbers[left]+numbers[right]>target) right--
        else if(numbers[left]+numbers[right]<target) left++
        else return [left+1, right+1]
    }
    return []
}

console.log(twoSumSorted([1,2,3,4], 3))