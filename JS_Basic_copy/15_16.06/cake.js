function cake(params) {
    let w = Number(params[0]);
    let l = Number(params[1]);
    let index = 2;
    let eating = params[index];
    let area = w * l;
    let isFinished = true;

    while (area > 0) {
        eating = params[index];
        if (eating !== "STOP") {
            eating = Number(params[index]);
        } else {
            console.log(`${area} pieces are left.`);
            isFinished = false;
            break;
        }
        area -= eating;
        index++;
    }
    if (isFinished) {
        console.log(`No more cake left! You need ${Math.abs(area)} pieces more.`);
    } 
}
cake(["10",

"2",

"2",

"4",

"6",

"STOP"])