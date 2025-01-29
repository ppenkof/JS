function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let currElement = arr[i];
        let magicArr = [currElement];
        let sum = currElement;
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum === num) {
                magicArr.push(arr[j]);
                console.log(magicArr.join(' '));
            }
            sum = currElement;
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],
    6)