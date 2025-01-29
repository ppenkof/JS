function negativePositiveNumber(params) {
    const result = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i] < 0) {
            result.unshift(params[i]);
        } else {
            result.push(params[i]);
        }
    }
    console.log(result.join('\n'));
}
negativePositiveNumber([3, -2, 0, -1])