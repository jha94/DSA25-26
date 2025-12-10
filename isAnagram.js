const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  //   return s.split('').sort().join('')===t.split('').sort().join('')

// Sorting dominates, so:
// O(n log n) time
// O(n) space (split arrays + sorted arrays + joined strings) (3*string size*2)

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) return false;
    map.set(t[i], map.get(t[i]) - 1);
    if (map.get(t[i]) === 0) map.delete(t[i]);
  }
  return map.size === 0;
};

// O(n) time, O(1) extra space

console.log(isAnagram('racecar', 'carbace'));
