function goldenMine(params) {
    let index = 0;
    let numberOfLocation = Number(params[index]);
    index++;
    let expectedAverageYield = Number(params[index]);
    index++;
    let workingDays = Number(params[index]);
    index++;
    let yieldPerDay = Number(params[index]);
    let sumOfYield = 0;
    let averageYield = 0;

    for (let i = 1; i <= numberOfLocation; i++) {
        if (i > 1) {
            expectedAverageYield = Number(params[index]);
            index++;
            workingDays = Number(params[index]);
            index++;
        }
        for (let j = 0; j < workingDays; j++) {
            yieldPerDay = Number(params[index]);
            sumOfYield += yieldPerDay;
            index++;
        }
        averageYield = sumOfYield / workingDays;
        if (expectedAverageYield <= averageYield) {
            console.log(`Good job! Average gold per day: ${averageYield.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedAverageYield - averageYield).toFixed(2)} gold.`);
        }
        averageYield = 0;
        sumOfYield = 0;
    }

}
goldenMine(["1", "5", "3", "10", "1", "3"])
goldenMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])