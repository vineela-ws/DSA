

function buyAndSellStocks(prices){

    let maxProfit = 0;

    for(let i = 0; i<prices.length; i++){
        for(let j = i+1; j<prices.length; j++){
            if(prices[j]-prices[i]>maxProfit){
                maxProfit = prices[j]-prices[i];
            }
        }
        
    }
    return maxProfit;
}

let prices = [7,1,5,3,7,4];
let maxPro = buyAndSellStocks(prices);
console.log(maxPro);