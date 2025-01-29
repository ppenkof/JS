function numberPyramidV2(params) {
    let index = 0;
    let num = Number(params[0]);
    let isBigger = false;
    let printCurrent = '';
    let row = 0;
    let col = 0;

    for (row = 1; row <= num; row++) {
        for (col = 1; col <= row; col++) {
            if (col > num) {
                isBigger = true;
                break;
            }
            printCurrent += index + ' ';
            if(col === row){index += col;}
        }
        console.log(printCurrent);
        printCurrent = '';
        if (isBigger) { break; }
    }


}
numberPyramidV2(["7"])