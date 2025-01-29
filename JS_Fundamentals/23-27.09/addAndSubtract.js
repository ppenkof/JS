function addAndSubtract(arr) {
    let newArr = [];
    let copyArr = arr;
    let origSum = 0;
    let newSum = 0;
    let newElements = 0;
    for (let i = 0; i < copyArr.length; i++) {
        let currentElement = copyArr[i];
        origSum += currentElement;
        if (currentElement % 2 === 0) {
            newElements = currentElement += i;
        } else {
            newElements = currentElement -= i;
        }
        newSum += newElements;
        newArr.push(newElements);
    }
    console.log(newArr);
    console.log(origSum);
    console.log(newSum);
}
addAndSubtract([-5, 11, 3, 0, 2])