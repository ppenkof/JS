function charactersInRange(startChar, endChar) {
    let startASCIIcode = startChar.charCodeAt();
    let endASCIIcode = endChar.charCodeAt();
    let result = '';
    let minASCIIcode = Math.min(startASCIIcode, endASCIIcode)
    let maxASCIIcode = Math.max(startASCIIcode, endASCIIcode);

    for (let i = minASCIIcode + 1; i < maxASCIIcode; i++) {
        let currChar = String.fromCharCode(i);
        result += currChar + ' ';
    }
    console.log(result);
}
charactersInRange('a', 'd')