function reverseAnArrayOfNumbers(n, arr) {
    //     if (n <= arr.length) {
    //         let reversedArr = [];
    //         for (let i = n - 1; i >= 0; i--) {
    //             let currentElement = arr[i];
    //             reversedArr.push(currentElement);
    //         }
    //         console.log(reversedArr.join(' '));
    //     } 
    // if (n <= arr.length) {
    //     let midPoint = Math.floor(arr.length / 2) - 1;
    //     for (let i = 0; i <= midPoint; i++) {
    //         let leftElement = arr[i];
    //         let rightElement = arr[arr.length - 1 - i];
    //         arr[i] = rightElement;
    //         arr[arr.length - 1 - i] = leftElement;
    //     }
    //     console.log(arr.join(' '));
    // }

    // if (n <= arr.length) {
    //     let midPoint = Math.floor(arr.length / 2) - 1;
    //     for (let i = 0; i <= midPoint; i++) {
    //         arr[i] = arr[i] + arr[arr.length - 1 - i];
    //         arr[arr.length - 1 - i] = arr[i] - arr[arr.length - 1 - i];
    //         arr[i] = arr[i] - arr[arr.length - 1 - i];
    //     }
    //     console.log(arr.join(' '));
    // }

    if (n <= arr.length) {
        let midPoint = Math.floor(arr.length / 2) - 1;
        for (let i = 0; i <= midPoint; i++) {
            // let a = arr[i];
            // let b = arr[arr.length - 1 - i];
            console.log(arr[i]);
            console.log(arr[arr.length - 1 - i]);
            console.log('/n');
            //arr[arr.length - 1 - i] = arr[arr.length - 1 - i] & arr[i];
            arr[i] = arr[i] | arr[arr.length - 1 - i];

            console.log(arr[i]);
            console.log(arr[arr.length - 1 - i]);
            console.log('/n');

            arr[arr.length - 1 - i] = arr[arr.length - 1 - i] & arr[i]>>2;
           //arr[i] = arr[i]>>2 & arr[arr.length - 1 - i];

            console.log(arr[i]);
            console.log(arr[arr.length - 1 - i]);
            console.log('/n');
        }
        console.log(arr.join(' '));
    }


}
reverseAnArrayOfNumbers(3, [1, 2, 3, 4, 5])