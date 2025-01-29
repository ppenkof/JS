function equalSums(arr) {

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let k = 0; k < i; k++) {
            let elementToLeft = arr[k];
            leftSum += elementToLeft;
        }

        for (let j = i + 1; j < arr.length; j++) {
            let elementToRight = arr[j];
            rightSum += elementToRight;
        }
        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }
    console.log('no');
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])