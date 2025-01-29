function processOddPositions(params) {
    // const oddArr = [];
    //    for (let i = 0; i < params.length; i++) {
    //         if (i % 2 !== 0) {
    //             oddArr.push(params[i]);
    //         }
    //     }

    const result = params.filter((a, i) => i % 2 !== 0)
        .map((a) => a *= 2)
        .reverse();
    return result.join(' ');
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));