function maxNumber(params) {
    let index = 0;
    let command = params[index];
    let num = Number(command);
    let maxNum = Number.MIN_SAFE_INTEGER
    index++;

    while (command !== "Stop") {
        num = Number(command);
        if (num > maxNum) {
            maxNum = num;
        }
        command = params[index];
        index++;
    }
    console.log(maxNum);
}
maxNumber(["-1", "-2", "Stop"])