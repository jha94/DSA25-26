const groupAnagrams = (strs) => {
    // const uniqueSorted = new Set()
    // strs.forEach((value) => {
    //     uniqueSorted.add(value.split('').sort().join(''))
    // })
    // const res = Array.from(
    //     { length: [...uniqueSorted].length },
    //     () => []
    // );
    // strs.forEach((value) => {
    //     res[[...uniqueSorted].indexOf(value.split('').sort().join(''))].push(value)
    // })
    // return res
    const map = new Map()
    for(let str of strs){
        const key = str.split('').sort().join('')
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(str)
    }
    return [...map.values()]
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))