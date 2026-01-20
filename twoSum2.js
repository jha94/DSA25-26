const twoSum = (numbers, target) => {
    const map = new Map();
    for(let index=0;index<numbers.length;index++){
        const remain = target - numbers[index];
        if(map.has(remain)){
            return [map.get(remain), index+1]
        } else{
            map.set(numbers[index], index+1)
        }
    }
    return []
}

console.log(twoSum([1,2,3,4], 3))