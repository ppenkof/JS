function cleaverLily(params) {
    let ageLily = Number(params[0]);
    let washingMashinePrice = Number(params[1]);
    let toyPrice = Number(params[2]);
    let money = 0;
    let toyCount = 0;
    let broutherMoney = 1;

    for (let i = 1; i <= ageLily; i++) {
        if (i % 2 === 0) {
            money += ((i / 2) * 10);
            money -= broutherMoney;

        } else {
            toyCount++
        }
    }

    let toyProfit = toyCount * toyPrice;
    let totalMoney = toyProfit + money;
    if (washingMashinePrice <= totalMoney) {
        console.log(`Yes! ${(totalMoney - washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashinePrice - totalMoney).toFixed(2)}`);
    }
}
cleaverLily(["10",

"170.00",

"6"])