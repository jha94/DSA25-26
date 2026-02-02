const maxProfit = (prices) => {
    // 0(n^2)
    // let maxProfit = 0
    // for(let index=0;index<prices.length;index++){
    //     for(let ind=index+1;ind<prices.length;ind++){
    //         maxProfit = Math.max(maxProfit, prices[ind]-prices[index])
    //     }
    // }
    // return maxProfit

    // we only need lowest price so far n profit if we sell today

    let minPrice = Infinity
    let profit = 0
    for(let price of prices){
        if(price<minPrice){
            minPrice = price
        }
        profit = Math.max(profit, price-minPrice)
    }
    return profit
}

console.log(maxProfit([10,1,5,6,7,1]))