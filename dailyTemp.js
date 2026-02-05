const dailyTemperatures = (temperatures) => {
    const res = Array(temperatures.length).fill(0);
    const stack = []
    for(let index=0;index<temperatures.length;index++){
        while(stack.length && temperatures[index]>temperatures[stack[stack.length-1]]){
            const prevIndex = stack.pop()
            res[prevIndex] = index-prevIndex
        }
        stack.push(index)
    }
    // for(let index=0;index<temperatures.length;index++){
    //     for(let ind=index+1;ind<temperatures.length;ind++){
    //         if(temperatures[ind]>temperatures[index]){
    //             res[index]=(ind-index)
    //             break
    //         }
    //     }
    // }
    return res
}

console.log(dailyTemperatures([30,38,30,36,35,40,28]))
// console.log(dailyTemperatures([22,21,20]))
// [1,4,1,2,1,0,0]