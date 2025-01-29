function rotateArray(arrStr) {
    let rotateCounter = Number(arrStr[arrStr.length - 1]);
    let currArr = arrStr;
    currArr.pop();
    for (let i = 1; i <= rotateCounter; i++) {
       let newElement = currArr.pop();
        currArr.unshift(newElement);
    }
    console.log(currArr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])