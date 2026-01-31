const isPalindrome = (s) =>{
    // const regex = /^[A-Za-z]+$/;
    // const regex = /[a-z]/
    // let onlychars = '';
    // for(let char of s){
    //     if(regex.test(char)){
    //         onlychars+=char.toLowerCase()
    //     }
    // }
    // // return onlychars === onlychars.split('').reverse().join('')
    // let left = 0;
    // let right = onlychars.length-1
    // while(left<right){
    //     if(onlychars[left]!==onlychars[right]){
    //         return false
    //     }
    //     left++;
    //     right--
    // }
    // return true

    const isAlpha = (char) => {
        if((char>='a' && char<='z')||(char>='A' && char<='Z')||(char>=0 && char<=9)){
            return true
        }
    }

    let left = 0;
    let right = s.length-1
    while(left<right){
        while(left<right && !isAlpha(s[left])) left++
        while(left<right && !isAlpha(s[right])) right--
        if(s[left].toLowerCase()!==s[right].toLowerCase()){
            return false
        }
        left++;
        right--

    }
    return true
}

console.log(isPalindrome("0P"))