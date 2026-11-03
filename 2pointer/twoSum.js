const twoSum = (numbers, target) => {
  const result = [];
  for (let index = 0; index < numbers.length; index++) {
    for (let ind = index + 1; ind < numbers.length; ind++) {
      if (numbers[index] + numbers[ind] === target) {
        result.push(index+1);
        result.push(ind+1);
      }
    }
  }
  return result;
};
console.log(twoSum([1, 2, 3, 4], 3));
