function smallestTwoNumbers(params) {
    params.sort((a,b) =>a-b);
    let first=params.shift();
    let second=params.shift();
    console.log(first, second);
}
smallestTwoNumbers([30, 15, 50, 5])