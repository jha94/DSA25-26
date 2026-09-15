const removeElement = (nums, val) => {
   console.log(nums.filter((num)=>num!==val))
}

removeElement([0,1,2,2,3,0,4,2], 2)