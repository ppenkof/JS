function wordTracker(arr) {
    let wordOccurance = {};
    let searchedWords = arr
        .shift()
        .split(' ');
    for (const word of searchedWords) {
        wordOccurance[word] = 0;
    }

    for (let word of arr) {
        if (wordOccurance.hasOwnProperty(word)) {
            wordOccurance[word]++;
        }
    }

    let entries = Object.entries(wordOccurance);
    let sorted = entries
        .sort((a, b) => b[1] - a[1]);
    for (let [element, value] of sorted) {
        console.log(`${element} - ${value}`);
    }
}
wordTracker([

    'the is',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence'])