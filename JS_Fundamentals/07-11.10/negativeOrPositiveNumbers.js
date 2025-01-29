function negativeOrPositiveNumbers(arr) {
    // let newArr = arr
    //     .map(a => Number(a))
    //     .sort((a, b) => a - b);
    // console.log(newArr);
    let newArr = [];
    for (let i of arr) {
        let currElement = +i;
        if (currElement < 0) {
            newArr.unshift(currElement);
        } else {
            newArr.push(currElement);
        }
    }
    console.log(newArr.join('\n'));
}
//negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])