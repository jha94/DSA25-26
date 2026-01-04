const isPalindrome = (s) => {
    // const regex = /[a-z0-9]/
    // let str = ""
    // for (let char of s) {
    //     if (regex.test(char)) {
    //         str += char.toLowerCase()
    //     }
    // }
    // return str === str.split('').reverse().join('')
    const onlyAlphaNumeric = s.toLowerCase().replace(/[^0-9a-z]/g, "")
    return onlyAlphaNumeric === onlyAlphaNumeric.split('').reverse().join('')
}
console.log(isPalindrome("Was it a car or a cat I saw?"))