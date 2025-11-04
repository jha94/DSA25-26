const topKFreq = (arr, top) => {
  const map = new Map();
  for (let index = 0; index < arr.length; index++) {
    map.set(arr[index], (map.get(arr[index]) || 0) + 1);
  }

  return Array.from(map).sort((a, b) => b[1] - a[1]).slice(0,top).map(item=> item[0])
//   const sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
//   const result = [];
//   const limit = Math.min(top, sorted.length);
//   for (let index = 0; index < limit; index++) {
//     result.push(sorted[index]?.[0]);
//   }
//   return result;
};

console.log(topKFreq([1, 2, 2, 3, 3, 3, 3], 50));
