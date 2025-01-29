function condenseArrayToNumber(arr) {
    let currArr = arr;
    while (currArr.length > 1) {
        let condense = [];
        for (let n = 0; n < currArr.length - 1; n++) {
            let currentElement = currArr[n];
            let nextElement = currArr[n + 1];
            condense.push(currentElement + nextElement);
        }
        currArr = condense;
    }
    console.log(currArr[0]);
}
condenseArrayToNumber([1])