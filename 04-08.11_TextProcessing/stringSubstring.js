function stringSubstring(word, text) {
    let copyText = text.toLowerCase().split(' ');
    word = word.toLowerCase();
    if (copyText.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
stringSubstring('best',
    'JavaScript is the bestcase programming language')