const encode = (strs) => {
    let res = ""
    for(let str of strs){
        res+=str+'_'
    }
    return res
}

const encodedStr = encode(["Hello", "World", "at"])
console.log(encodedStr);
