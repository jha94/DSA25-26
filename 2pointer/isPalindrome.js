const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  const isAlphaNumeric = (char) =>
    (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
  s=s.toLowerCase();
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome("tab a cat"));
