function pets(params) {
    let holidays = Number(params[0]);
    let AllkgFood = Number(params[1]);
    let dogKgPerDayFood = Number(params[2]);
    let catKgPerDayFood = Number(params[3]);
    let tortleGramsPerDayFood = Number(params[4]);
    let dogFood = dogKgPerDayFood * holidays;
    let catFood = catKgPerDayFood * holidays;
    let tortleFood = tortleGramsPerDayFood * holidays / 1000;
    let neededFood = dogFood + catFood + tortleFood;

    if (AllkgFood >= neededFood) {
        console.log(`${Math.floor(AllkgFood - neededFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(neededFood - AllkgFood)} more kilos of food are needed.`);
    }
}
pets(["5","10","2.1","0.8","321"])