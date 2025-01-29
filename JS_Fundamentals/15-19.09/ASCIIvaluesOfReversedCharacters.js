function ASCIIvaluesOfReversedCharacters(char1, char2, char3) {
    let ASCIIvalue = 0;
    let reverseStringValue = char3 + char2 + char1;
    let ASCIIinLine = '';
    for (let i = 0; i <= 2; i++) {
        ASCIIvalue = reverseStringValue.charCodeAt(i);
        ASCIIinLine += ASCIIvalue + ' ';
    }
    console.log(reverseStringValue);
    console.log(ASCIIinLine);
}
ASCIIvaluesOfReversedCharacters('%',
'2',
'o')