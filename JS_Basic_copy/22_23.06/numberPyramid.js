function numberPyramid(params) {
    let index = 1;
    let num = Number(params[0]);
    let isBigger = false;
    let printCurrent = '';

    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            if (index > num) {
                isBigger = true;
                break;
            }
            printCurrent += index + ' ';
            index++;
        }
        console.log(printCurrent);
        printCurrent = '';
        if (isBigger) { break; }
    }


}
numberPyramid(["25"])