function reverseInPlace(arr) {
    let midPoint = Math.floor(arr.length / 2) - 1;
        for (let i = 0; i <= midPoint; i++) {
            let leftElement = arr[i];
            let rightElement = arr[arr.length - 1 - i];
            arr[i] = rightElement;
            arr[arr.length - 1 - i] = leftElement;
        }
        console.log(arr.join(' '));
}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])