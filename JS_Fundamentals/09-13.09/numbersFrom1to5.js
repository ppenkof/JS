function numbersFrom1to5() {
    let digitConcatinate = '';
    for (let i = 1; i <= 5; i++) {
        if (i === 1) {
            digitConcatinate += '' + i;
        } else {
            digitConcatinate += ' ' + i;
        }
    }
    console.log(digitConcatinate);
}
numbersFrom1to5()