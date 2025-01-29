function firstAndLastKnumbers(arr) {
    let k = arr.shift();
    let currArr = arr.slice(0, k);
    let lastElementArr = arr.slice(-k);
    // for (let i = 0; i < k; i++) {
    //     currElement = lastElementArr.shift();
    //     currArr.push(currElement);
    // }
    console.log(currArr.join(' '));
    console.log(lastElementArr.join(' '));
}
//firstAndLastKnumbers([2, 7, 8, 9])
firstAndLastKnumbers([3, 6, 7, 8, 9])