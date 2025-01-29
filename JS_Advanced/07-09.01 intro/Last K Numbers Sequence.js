function lastKnumbersSequence(n, k) {
    const sequance = [1];

    for (let i = 0; i < n - 1; i++) {
        let element = 0;
        for (let j = 0; j < k; j++) {
            if (i < k) {
                if (sequance[j]) {
                    element += sequance[j];
                }
            } else {
                if (sequance[i-j]) {
                    element += sequance[i-j];
                }
            }
        }
        sequance.push(element);
    }
    return sequance;
}
console.log(lastKnumbersSequence(8, 2));