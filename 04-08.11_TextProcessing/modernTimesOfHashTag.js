function modernTimesOfHashTag(str) {
    let arrStr = str.split(' ')
        .filter(a => a.startsWith('#') && a.length > 1);
    for (const word of arrStr) {
        arrStr = word.substring(1);
        let pattern = /^[A-Za-z]+$/;
        if (pattern.test(arrStr)) {
            console.log(arrStr);
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')