function equalArrays(arr1, arr2) {
    let firstArr = arr1;
    let secondArr = arr2;
    let sum = 0;
    //let isEqual = true;
    if (firstArr.length === secondArr.length) {
        for (let i = 0; i < firstArr.length; i++) {
            let currentElement1 = Number(firstArr[i]);
            let currentElement2 = Number(secondArr[i]);
            if (currentElement1 !== currentElement2) {
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                //isEqual = false;
                return;
            } else {
                sum += currentElement1;
            }

        }
    } else {
        console.log(`Arrays are not identical. Found difference at ${firstArr.length >= secondArr.length ? firstArr : secondArr} index`);
        return;
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
//equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1'], ['10'])