function printNthElement(arrStr) {
    let resultArr = [];
    let indexResultArr = Number(arrStr[arrStr.length - 1]);

    for (let i = 0; i < arrStr.length - 1; i += indexResultArr) {
        resultArr.push(arrStr[i]);
    }
    console.log(resultArr.join(' '));
}
//printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '3'])