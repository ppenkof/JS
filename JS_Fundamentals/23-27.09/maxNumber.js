function maxNumber(arr) {
    let topNumArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isTopNum = true;
        let currNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let numToRigth = arr[j];
            if (numToRigth >= currNum) {
                isTopNum = false;
                break;
            }
        }
        if (isTopNum) {
            topNumArr.push(currNum);
        }
    }
    console.log(topNumArr.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17])