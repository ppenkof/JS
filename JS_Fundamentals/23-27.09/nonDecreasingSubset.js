function nonDecreasingSubset(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currElement = arr[i];
        let nextElement = arr[i + 1];
        if (currElement < nextElement) {
         let maxElement = nextElement;
         maxElement = Math.max(currElement, nextElement);
        newArr.push(maxElement);
        //}
    }
    console.log(newArr.join(' '));
}
nonDecreasingSubset([20, 3, 2, 15, 6, 1])