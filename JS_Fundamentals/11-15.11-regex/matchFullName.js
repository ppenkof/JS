function matchFullName(str) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let matches = str.match(pattern);
    console.log(matches.join(' '));
}
matchFullName("Ivan Ivanov, AIvan ivanov, ivan IIvanov, IVan Ivanov, Test Testov, Ivan Ivanov, Ivan Ivanov")