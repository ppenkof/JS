function lastKnumbersSequence(n, k) {
    let firstElement = 1;
    let currArr = [firstElement];
    
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let lastKseq = currArr.slice(-k);
        for (let num of lastKseq) {
            sum += num;
        }
        currArr.push(sum);
    }
    console.log(currArr.join(' '));
}
lastKnumbersSequence(8, 2)