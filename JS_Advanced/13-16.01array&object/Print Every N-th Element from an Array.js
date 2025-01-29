function printEveryNElementFromArray(arr, n) {
    const result = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (index % n === 0) {
            result.push(element);
        }
    }
    return result;
}
console.log(printEveryNElementFromArray(['5',

    '20',

    '31',

    '4',

    '20'],

    2));