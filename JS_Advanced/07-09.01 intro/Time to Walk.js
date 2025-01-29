function timeToWalk(numOfSteps, footprint, speed) {
    numOfSteps = Number(numOfSteps);
    footprint = Number(footprint);
    speed = Number(speed);
    speed = (speed * 1000) / 3600;
    let distance = numOfSteps * footprint;
    let breaKAdditionalTime = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + breaKAdditionalTime;
    let timeMin = Math.floor(time / 60);
    let timSec = Math.round(time % 60);
    let timeHr = Math.floor(time / 3600);


    console.log(`${(timeHr < 10 ? '0' : '') + timeHr}:${(timeMin < 10 ? '0' : '') + timeMin}:${(timSec < 10 ? '0' : '') + timSec}`);

}
timeToWalk(4000, 0.60, 5)