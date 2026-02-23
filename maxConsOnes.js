const findMaxConsecutiveOnes = (nums) => {
    let maxCount = 0;
    let currentCount = 0
    nums.forEach((value)=>{
        if(value===1){
            currentCount++
        } else{
            maxCount = Math.max(maxCount, currentCount)
            currentCount=0
        }
    })
    return Math.max(maxCount, currentCount)
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))