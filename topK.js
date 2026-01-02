// const topK = (nums, k) => {
//   const map = new Map();
//   for (let index = 0; index < nums.length; index++) {
//     map.set(nums[index], (map.get(nums[index]) || 0) + 1);
//   }
//   let count = 0;
//   let result = [];
//   const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);
//   sortedMap.forEach((value) => {
//     if (count < k) {
//       result.push(value[0]);
//       count++;
//     }
//   });
//   return result;
// };

// const topK = (nums, k) => {
//   const map = new Map();
//   for(let num of nums){
//     map.set(num, (map.get(num)||0)+1)
//   }
//   const heap = [];
//   for(let [num, freq] of map){
//     heap.push([freq, num])
//     heap.sort((a,b)=>a[0]-b[0])
//     if(heap.length>k) heap.shift()
//   }
// return heap.map((a)=>a[1])
// };

const topK = (nums, k) => {
  const map = new Map();
  for(let num of nums){
    map.set(num, (map.get(num)||0)+1)
  }
  const bucket = Array(nums.length+1).fill().map(()=>[]);
  for(let [num, freq] of map){
   bucket[freq].push(num)
  }
  const result = []
  for(let index=bucket.length-1;index>=0 && result.length<k;index--){
    for(let num of bucket[index]){
      result.push(num)
      if(result.length===k) return result
    }
  }
};

console.log(topK([1, 2, 2, 3, 3, 3, 3, 3], 2));
