function revealWords(word, text) {
    let textCopy = text;
    let wordStr = word.split(', ');

    for (let words of wordStr) {
        let replacedPattern = '*'.repeat(words.length);
        textCopy = textCopy.replace(replacedPattern, words);
    }
    console.log(textCopy);
}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')