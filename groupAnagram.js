// const groupAnagrams = (strs) => {
//     const unique = new Set(strs.map((value) => value.split('').sort().join('')))
//     const map = new Map()
//     unique.forEach((value) => {
//         map.set(value, [])
//     })
//     strs.map(value => {
//         const val = value.split('').sort().join('');
//         map.get(val).push(value)
//     })
//     const res = [];
//     for(let [key, value] of map){
//         res.push(value)
//     }
//     return res
// }

const groupAnagrams = (strs) => {
    const map = new Map();
    for (let str of strs) {
        const key = str.split('').sort().join('')
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(str)
    }
    return [...map.values()]
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))