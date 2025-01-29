function averageNumber(params) {
    let index = 0;
    let count =Number(params[0]);
    index++;
    let num = Number(params[index]);
    let sum = 0;

    for (let i = 1; i <= count; i++) {
        num = Number(params[index]);
        sum += num;
        index++;
    }
    let average = sum / count;
    console.log(average.toFixed(2));
}
averageNumber(['3',
    '82',
    '43', '22'
])