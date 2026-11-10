const maxProfit = (prices) => {
  if (prices.length < 2) return 0;
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let index = 0; index < prices.length; index++) {
    minPrice = Math.min(minPrice, prices[index]);
    maxProfit = Math.max(maxProfit, prices[index] - minPrice);
  }
  return maxProfit;
};
console.log(maxProfit([10, 8, 7, 5, 2]));
