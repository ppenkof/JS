function rotateArray(inputArr,numberOfRotation) {
    for (let i = 0; i <numberOfRotation; i++) {
        inputArr.unshift(inputArr.pop());    
    }
console.log(inputArr.join(' '));
}
rotateArray(['1',

'2',

'3',

'4'],

2)