function upperCase(text) {
    const upperCaseArr = [];
    let pattern = /\w+/g;
    let match = text.match(pattern);
    for (let i = 0; i < match.length; i++) {
       let element= match[i].toUpperCase();
        upperCaseArr.push(element);
    }
    console.log(upperCaseArr.join(', '));

}
upperCase('Hi, how are you?')