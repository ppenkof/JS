function digitsWithWords(digitStr) {
    let digitNum = 0;
    switch (digitStr) {
        case 'one':
            digitNum = 1;
            break;
        case 'two':
            digitNum = 2;
            break;
        case 'three':
            digitNum = 3;
            break;
        case 'four':
            digitNum = 4;
            break;
        case 'five':
            digitNum = 5;
            break;
        case 'six':
            digitNum = 6;
            break;
        case 'seven':
            digitNum = 7;
            break;
        case 'eight':
            digitNum = 8;
            break;
        case 'nine':
            digitNum = 9;
            break;
        default:
            break;
    }
    console.log(digitNum);
}
digitsWithWords('two')