function distinctArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currNum=arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let findNum=arr[j];
            if (currNum === findNum) {
               arr.splice(j, 1);
            }
        }
    }
    console.log(arr.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])