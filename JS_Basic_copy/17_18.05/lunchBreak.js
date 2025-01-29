function lunchBreak(params) {
    let movieName = params[0];
    let movieDuration = Number(params[1]);
    let breakDuration = Number(params[2]);
    let totalTime = 1 / 8 * breakDuration + 1 / 4 * breakDuration + movieDuration;
    if (totalTime <= breakDuration) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(breakDuration - totalTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(totalTime - breakDuration)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",

    "48",

    "60"])