function braceletStand(params) {
    let personalMoneyPerDay = Number(params[0]);
    let salesProfitPerDay = Number(params[1]);
    let outlaysPeriod = Number(params[2]);
    let presentPrice = Number(params[3]);

    let personalMoney = personalMoneyPerDay * 5;
    let salesProfit = salesProfitPerDay * 5;
    let totalMoney = personalMoney + salesProfit - outlaysPeriod;
    if (totalMoney >= presentPrice) {
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(presentPrice - totalMoney).toFixed(2)} BGN.`);
    }

}
braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"]);