function flowerShop(params) {
    let magnoliaCount = Number(params[0]);
    let hyacinthCount = Number(params[1]);
    let roseCount = Number(params[2]);
    let cactusCount = Number(params[3]);
    let PresentPrice = Number(params[4]);

    let magnoliaTotal = magnoliaCount * 3.25;
    let hyacinthTotal = hyacinthCount * 4;
    let roseTotal = roseCount * 3.50;
    let cactusTotal = cactusCount * 8;
    let flowerSum = magnoliaTotal + hyacinthTotal + roseTotal + cactusTotal;
    let totalProfit = flowerSum * 0.95;

    if(totalProfit>=PresentPrice){
        console.log(`She is left with ${Math.floor(totalProfit-PresentPrice)} leva.`);
    }else{
        console.log(`She will have to borrow ${Math.ceil(PresentPrice-totalProfit)} leva.`);
    }
}
flowerShop(["15","7","5","10","100"])