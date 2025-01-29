function censoredWords(text, word) {
    //let result = text.replace(word, '*'.repeat(word.length));
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}
censoredWords('A small sentence with some words', 'small')