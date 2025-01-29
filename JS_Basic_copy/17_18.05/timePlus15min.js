function timePlus15(params) {
    let hours = Number(params[0]);
    let minutes = Number(params[1]);
    let extraMinutes = 15;
    //let time = hours*60 + minutes + extraMinutes;
    if ((minutes + extraMinutes) > 59) {
        hours += 1;
        minutes = (minutes + extraMinutes) % 60;
    } else {
        minutes = (minutes + extraMinutes);
    }
    if (hours > 23) { hours = 0; }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
timePlus15(["12", "49"])