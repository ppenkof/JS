function investmentMilestones(arr) {
    let arrMap = arr.map(Number);
    let inverst = arrMap.shift();
    let persent = arrMap.shift();
    let years = arrMap.shift();
    let desireProfit = arrMap.shift();
    let sum = 0;

    for (let i = 1; i <= years; i++) {

        if (i === 4) {
            inverst += 1000;
        } else if (i === 6) {
            persent += 3;
        }

        let currProfit = inverst * persent / 100;
        if (i === 9) {
            currProfit = 0;
        }
        sum += currProfit;
    }
    if (sum >= desireProfit) {
        console.log(`What a journey! I have made ${sum.toFixed(2)}lv`);
    } else {
        console.log(`Everybody can fail! I need ${(desireProfit - sum).toFixed(2)}lv to achieve my goal`);
    }
}
investmentMilestones(["7000.0", "5", "10", "4100.0"])
investmentMilestones(["1000.0", "10", "5", "2000.0"])
investmentMilestones(["40000.0", "3", "3", "3000.0"])