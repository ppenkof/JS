function wordTracker(arr) {
    let tracker = new Map();
    //let sorting = new Map();
    let searchedWords = arr
        .shift()
        .split(' ');

    for (let word of searchedWords) {
       tracker.set(word,0);
    }

    for (let name of arr) {
        if (tracker.has(name)) {
            tracker.set(name,tracker.get(name)+1);
        }
    }
    let sorted = Array
        .from(tracker)
        .sort((a, b) => b[1] - a[1]);
    for (let [element, value] of sorted) {
        console.log(`${element} - ${value}`);
    }
}
wordTracker([

'the is song another',

'first', 'sentence', 'Here', 'is',

'another', 'the', 'And', 'finally', 'the',

'the', 'sentence', 'song','song'])