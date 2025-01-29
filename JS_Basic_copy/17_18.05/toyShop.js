function toyShop(params) {
    let excursionPrize = Number(params[0]);
    let puzzels = Number(params[1]);
    let talkingDolls = Number(params[2]);
    let teddyBears = Number(params[3]);
    let minions = Number(params[4]);
    let toyTracks = Number(params[5]);
    let totalNumber = puzzels + talkingDolls + teddyBears + minions + toyTracks;
    let totalPrize = (puzzels * 2.60) + (talkingDolls * 3) + (teddyBears * 4.10) + (minions * 8.20) + (toyTracks * 2);

    if (totalNumber >= 50) {
        totalPrize = totalPrize * 0.75;
    }

    let rent = totalPrize * 0.1;
    totalPrize = totalPrize - rent;

    if (totalPrize >= excursionPrize) {
        console.log(`Yes! ${(totalPrize - excursionPrize).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(Math.abs(totalPrize - excursionPrize)).toFixed(2)} lv needed.`);
    }
}
toyShop(["320", "8", "2", "5", "5", "1"])