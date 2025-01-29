function number(str) {
    let arr = str.split(' ').map(x => Number(x)).sort((a, b) => b - a);
    let sum = arr.reduce((a, b) => a + b, 0);
    let average = sum / arr.length;
    let newNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            if (newNum.length < 5) {
                newNum.push(arr[i]);
            }
        }
    }
    if (newNum.length < 1) {
        console.log("No");
    } else {
        console.log(newNum.join(' '));
    }
}
number('10 20 30 40 50')
number('5 2 3 4 -10 30 40 50 20 50 60 60 51')
number('1')
number('-1 -2 -3 -4 -5 -6')