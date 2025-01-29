function minNumber(params) {
    let index = 0;
    let command = params[index];
    let num = Number(command);
    let minNum = Number.MAX_SAFE_INTEGER
    index++;

    while (command !== "Stop") {
        num = Number(command);
        if (num < minNum) {
            minNum = num;
        }
        command = params[index];
        index++;
    }
    console.log(minNum);
}
minNumber(["-1", "-2", "Stop"])