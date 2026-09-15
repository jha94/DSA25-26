const lengthOfLastWord = (s) => {
    const stringArr = s.trim().split(' ');
    return stringArr[stringArr.length-1].length
}
console.log(lengthOfLastWord("luffy is still joyboy"))