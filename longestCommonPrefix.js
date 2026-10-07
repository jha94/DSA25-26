const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  const firstStr = strs[0];
  let result = "";

  for (let ind = 0; ind < firstStr.length; ind++) {
    let char = firstStr[ind];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][ind] !== char) {
        return result;
      }
    }
    result += char;
  }
  return result;
};
console.log(longestCommonPrefix(["bat", "bag", "bank", "band"]));
