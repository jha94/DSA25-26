const groupAnagrams = (strs) => {
  if (strs.length === 0) return [];
  const map = new Map();
  for (let str of strs) {
    let key = Array(26).fill(0);
    for (let char of str) {
      key[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    key = JSON.stringify(key);

    if (!map.has(key)) {
      map.set(key, [str]);
    } else {
      map.get(key).push(str);
    }
  }
  return [...map.values()];
};
console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
