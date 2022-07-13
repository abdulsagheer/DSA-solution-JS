// Naive Implementation
const stockBuySell = price => {

    if (price.length == 1) return;

    let i = 0;
    while (i < price.length - 1) {

    while (i < price.length - 1 && price[i + 1] <= price[i]) i++;

    if (i == price.length - 1) break;

    let buy = i++;

    while (i < price.length && price[i] >= price[i - 1]) i++;

    let sell = i - 1;

    console.log(`Buy on day: ${buy} - Sell on day: ${sell}`);
    }
}

console.log(stockBuySell([100, 180, 260, 310, 40, 535, 695]));

// Efficient Implementation