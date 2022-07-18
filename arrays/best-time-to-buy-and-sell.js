// Naive Implementation

var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    let currprofit = prices[i] - min;
    profit = Math.max(currprofit, profit);
  }
  return profit;
};

console.log(maxProfit([10, 20, 30, 40, 50, 60, 80, 100]))

// Time complexity - O(n)

// Efficient Implementation

const maxProfits = (prices) => {
  let minprice = Number.MAX_VALUE;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    // find lowest price
    if (price < minprice) minprice = price;
    let diff = price - minprice;
    // find highest price
    if (diff > maxprofit) maxprofit = diff;
  }
  // return diff from lowest to highest
  return maxprofit;
};

console.log(maxProfits([10, 20, 30, 40, 50, 60, 80, 100]));