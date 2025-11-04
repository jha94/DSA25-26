const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  // return s.split('').sort().join('')===t.split('').sort().join('')
  const countS = {};
  const countT = {};
  for (let index = 0; index < s.length; index++) {
    countS[s[index]] = (countS[s[index]] || 0) + 1;
    countT[t[index]] = (countT[t[index]] || 0) + 1;
  }
  for(let key in countS){
    if(countS[key]!==countT[key]){
      return false
    }
  }
  return true;
};
console.log(validAnagram('racecar', 'carrace'));
