function maxSequenceOfEqualElements(arr) {
    let maxSequenceArr = [];
    let currSequence = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        if (currElement === currSequence[0]) {
            currSequence.push(currElement);
            if (currSequence.length > maxSequenceArr.length) {
                maxSequenceArr = currSequence;
            }
        } else {
            currSequence = [currElement];
        }
    }
    console.log(maxSequenceArr.join(' '));
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])