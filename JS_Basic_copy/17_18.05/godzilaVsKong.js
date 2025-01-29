function godzilaVsKong(params) {
    let budged = Number(params[0]);
    let extra = Number(params[1]);
    let extraWearingPrize = Number(params[2]);
    let decor = budged * 0.1;
    let totalWearing = extra * extraWearingPrize;
    
    if (extra >= 150) {
        totalWearing = totalWearing * 0.9;
    }
    
    let totalPrize = totalWearing + decor;

    if (totalPrize <= budged) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budged - totalPrize).toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!')
        console.log(`Wingard needs ${(totalPrize - budged).toFixed(2)} leva more.`);
    }
}
godzilaVsKong(["15437.62",

"186",

"57.99"])