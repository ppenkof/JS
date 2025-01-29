function lowerUpperCase(char) {
    let upperCaseChar = char.toUpperCase();
    if (char === upperCaseChar) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerUpperCase('p')