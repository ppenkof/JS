function triplesOfLatinLetters(n) {
    let letters = '';
    let num = Number(n);
    for (let i = 97; i < 97 + num; i++) {
        for (let j = 97; j < 97 + num; j++) {
            for (let k = 97; k < 97 + num; k++) {
                letters += String.fromCharCode(i);
                letters += String.fromCharCode(j);
                letters += String.fromCharCode(k);
                console.log(letters);
                letters = '';
            }
            letters = '';
        }
        letters = '';
    }
}
triplesOfLatinLetters('3')