const twoSum2 = (numbers, target) => {
    let left = 0;
    let right = numbers.length-1;
    while(left<right){
        if(numbers[left]+numbers[right]===target){
            return [left+1, right+1]
        } else if(numbers[left]+numbers[right]>target){
            right--
        } else{
            left++
        }
    }
    return []
}
console.log(twoSum2([1,2,3,4], 6))