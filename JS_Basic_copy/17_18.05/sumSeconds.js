function sumSeconds(params) {
    let firstTime   = Number(params[0]);
    let secondTime  = Number(params[1]);
    let thirdTime   = Number(params[2]);
    let total       = firstTime + secondTime + thirdTime;
    let minutes     = Math.floor(total / 60);
    let seconds     = total % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["22", "7", "34"])