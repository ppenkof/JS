function replaceRepeatingChars(str) {
    let newStr = '';
    let previousChar = '';
    for (const currChar of str) {
        if (previousChar !== currChar) {
            newStr += currChar;
        }
        previousChar = currChar;
    }
    console.log(newStr);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')