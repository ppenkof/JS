function wordOccurences(arr) {
    let occurence = new Map();
    //let newVal = 0;
    for (let element of arr) {
        let newVal = 1;
        if (!occurence.has(element)) {
            occurence.set(element, newVal);
        } else {
            newVal = occurence.get(element);
            newVal++;
            occurence.set(element, newVal);
        }
    }
    let sorting = Array
        .from(occurence)
        .sort((a, b) => b[1] - a[1]);
    for (let [element, value] of sorting) {
        console.log(`${element} -> ${value} times`);
    }
}
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])
// wordOccurences(["Here", "is", "the", "first", "sentence",

//     "Here", "is", "Here","another", "Here","sentence", "And",

//     "finally", "the", "third", "sentence"])