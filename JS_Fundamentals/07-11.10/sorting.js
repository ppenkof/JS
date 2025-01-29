function sorting(arr) {

    function sortAscending(arrA) {
        const copyedA = arrA;
        let currArrA = copyedA.sort((a, b) => a - b);
        return currArrA;
    }

    let asc = sortAscending(arr);
    let dec = [];
    let newArr = [];
    for (let i = asc.length - 1; i >= 0; i--) {
        dec.push(asc[i]);
    }

    let midPoint = Math.floor(dec.length / 2) - 1;
    for (let i = 0; i <= midPoint; i++) {
        newArr.push(dec[i]);
        newArr.push(asc[i]);
    }

    if (arr.length % 2 !== 0) {
        newArr.push(asc[midPoint + 1]);
    }

    console.log(newArr.join(' '));
}
//sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
sorting([1, 21, 3, 52, 69, 63, -31, 2, 18, 94])