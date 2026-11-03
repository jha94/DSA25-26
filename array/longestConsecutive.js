const longestConsecutive = (nums) => {
  const sortedUniques = [...new Set(nums.sort((a, b) => a - b))];
  let result = [];
  let temporary = [];
  for (let num of sortedUniques) {
    if (result.length === 0 || result[result.length - 1] + 1 === num) {
      result.push(num);
    } else {
      if (
        temporary.length === 0 ||
        temporary[temporary.length - 1] + 1 === num
      ) {
        temporary.push(num);
      } else {
        temporary = [];
        temporary.push(num);
      }
      if (temporary.length > result.length) {
        result = temporary;
      }
    }
  }
  console.log(result.length);
};
longestConsecutive([0,3,2,5,4,6,1,1]);
