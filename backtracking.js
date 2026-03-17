const subsets = (sets) => {
  const res = [[]];
  const dfs = (index, current) => {
    for (let ind = index; ind < sets.length; ind++) {
      current.push(sets[ind]);
      res.push([...current]);
      dfs(ind + 1, current);
      current.pop();
    }
  };
  dfs(0, []);
  return res;
};
// console.log(subsets([1, 2, 3]));

var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  const val = (n, base) => {
    if (n - base === 0) return true;
    if (n - base < 0) return false;
    return val(n, base * 2);
  };
  return val(n, 2);
};
console.log(isPowerOfTwo(3));
