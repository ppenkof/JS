function coins(params) {
    let sum = Number(params[0]);
    let coinCounter = 0;
    let converted = Math.floor(sum * 100);

    while (converted > 0) {
        if (converted >= 200) {
            converted -= 200;
            coinCounter++;
        } else if (converted >= 100) {
            converted -= 100;
            coinCounter++;
        } else if (converted >= 50) {
            converted -= 50;
            coinCounter++;
        } else if (converted >= 20) {
            converted -= 20;
            coinCounter++;
        } else if (converted >= 10) {
            converted -= 10;
            coinCounter++;
        } else if (converted >= 5) {
            converted -= 5;
            coinCounter++;
        } else if (converted >= 2) {
            converted -= 2;
            coinCounter++;
        } else if (converted >= 1) {
            converted--;
            coinCounter++;
        }
    }
    console.log(coinCounter);
}
coins(["2.73"]);