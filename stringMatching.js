const majorityElement = (names, heights) => {
    const peopleMap = new Map()
    for (let index = 0; index < names.length; index++) {
        peopleMap.set(names[index], heights[index])
    }
    return [...peopleMap.entries()].sort((a, b) => b[1] - a[1]).map((value) => {
        return value[0]
    })
}

console.log(majorityElement(["Alice", "Bob", "Bob"], [155, 185, 150]))