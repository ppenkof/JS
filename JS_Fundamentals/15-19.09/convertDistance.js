function convertDistance(distInMtr) {
    let kms=0;
    let miles=0;
    kms = distInMtr/1000;
    miles=(kms*0.621371).toFixed(2);
    console.log(`${distInMtr} meters is equal to ${kms} kilometers.`);
    console.log(`${kms} kilometers is equal to ${miles} miles.`);
}
convertDistance(5000)