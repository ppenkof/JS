function swimmingRecord(params) {
    let currentRecord = Number(params[0]);
    let distance = Number(params[1]);
    let timeForMeter = Number(params[2]);
    let timeDelay = Math.floor(distance / 15) * 12.5;
    let swimmingTime = distance * timeForMeter + timeDelay;
    
    if (currentRecord > swimmingTime) {
        console.log(`Yes, he succeeded! The new world record is ${swimmingTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(swimmingTime - currentRecord).toFixed(2)} seconds slower.`);
    }
}
swimmingRecord(["55555.67","3017","5.03"])
