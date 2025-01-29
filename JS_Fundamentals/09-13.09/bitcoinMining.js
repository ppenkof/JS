function bitcoinMining(miningDays) {
    //1 Bitcoin	11949.16 lv.
    //1 g of gold	67.51 lv.
    let bitcoinsCount = 0;
    let moneyOfGold = 0;
    let bitcoinAmount = 11949.16;
    let goldAmount = 67.51;
    let totalMoney = 0;
    let currentDay = 1;
    let dayOfFirstBitcoin = 0;

    for (let miningGoldPerShift of miningDays) {
        if (currentDay % 3 === 0) {
            miningGoldPerShift *= 0.7;
        }
        moneyOfGold = miningGoldPerShift * goldAmount;
        totalMoney += moneyOfGold;

        while (totalMoney >= bitcoinAmount) {
            if (bitcoinsCount === 0) {
                dayOfFirstBitcoin = currentDay;
            }
            bitcoinsCount++;
            totalMoney -= bitcoinAmount;
        }
        currentDay++;
    }
    console.log(`Bought bitcoins: ${bitcoinsCount}`);

    if (bitcoinsCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])