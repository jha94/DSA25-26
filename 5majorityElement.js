const majorityElement = (nums) => {
  const map = new Map();
  for(let num of nums){
    map.set(num, (map.get(num)||0)+1)
  }
  for(let [key, value] of map){
    if(value>=nums.length/2){
      return key
    }
  }
};
console.log(majorityElement([5,5,1,1,1,5,5]));
