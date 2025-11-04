const twoSum = (arr, target) => {
  // for(let index=0;index<arr.length;index++){
  //   const complement = target-arr[index]
  //   if(arr[index]+complement===target && arr.indexOf(complement)!==-1){
  //     return [index, arr.indexOf(complement)]
  //   }
  // }
  // return []

  const map = new Map();
  for(let index=0;index<arr.length;index++){
    const complement = target-arr[index]
    if(map.has(complement)){
      return [map.get(complement),index]
    }
    map.set(arr[index],index)
  }
  return []
}

console.log(twoSum([7, 2, 11, 15], 80));
