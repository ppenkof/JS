function experienceGaining(arr) {
    let wantedExperience = arr.shift();
    let battleCount = arr.shift();
    let sumExperience = 0;
    for (let i = 1; i <= arr.length; i++) {
        let currExperiance = arr[i-1];
        if (i % 3 === 0) {
            currExperiance *= 1.15;
        }
        if (i % 5 === 0) {
            currExperiance *= 0.90;
        }
        if (i % 15 === 0) {
            currExperiance *= 1.05;
        }
        sumExperience += currExperiance;
    }
    if (sumExperience >= wantedExperience) {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(wantedExperience-sumExperience).toFixed(2)} more needed."`);
    }
}
experienceGaining([500, 5, 50, 100, 200, 100, 30])
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20])
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20])
    
    